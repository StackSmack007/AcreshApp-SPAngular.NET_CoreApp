﻿using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.AutomapperConfigurations;
using DataTransferObjects.Comments;
using Infrastructure.Models;
using Infrastructure.Models.Enumerations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Acresh.Services.Services
{
    public class CommentService : ICommentService
    {
        private readonly IRepository<RecipeComment> commentRepo;
        private readonly IRepository<Recipe> recipeRepo;
        private readonly IMapper mapper;
        private readonly IRepository<CommentAttitude> atttitudeRepo;

        public CommentService(IRepository<RecipeComment> commentRepo, IRepository<Recipe> recipeRepo, IMapper mapper, IRepository<CommentAttitude> atttitudeRepo)
        {
            this.commentRepo = commentRepo;
            this.recipeRepo = recipeRepo;
            this.mapper = mapper;
            this.atttitudeRepo = atttitudeRepo;
        }

        public IQueryable<CommentDTOout> GetCommentsForRecipe(string recipeId, bool allComments = false)
        {
            var result = this.commentRepo.All().Where(x => x.IsDeleted == allComments && x.RecipeId == recipeId).OrderByDescending(x => x.DateOfCreation).To<CommentDTOout>();
            return result;
        }


        public async Task<int> SubmitCommentAsync(CommentDTOin comment)
        {
            bool recipeExists = await recipeRepo.All().AnyAsync(x => x.Id == comment.RecipeId && !x.IsDeleted);
            if (!recipeExists) throw new ArgumentOutOfRangeException("Recipe not found!");
            RecipeComment new_comment = mapper.Map<RecipeComment>(comment);
            await this.commentRepo.AddAssync(new_comment);
            await this.commentRepo.SaveChangesAsync();
            return new_comment.Id;
        }

        public async Task<CommentLikeStatusDTOout> SetVoteAsync(CommentVoteDTOin commentVote, string userId)
        {
            Attitude newAttitude = commentVote.Like ? Attitude.Like : Attitude.Dislike;
            CommentAttitude voteFd = await this.atttitudeRepo.All().FirstOrDefaultAsync(x => x.ShitGiverId == userId && x.CommentId == commentVote.Id);

            if (voteFd != null && voteFd.Attitude == newAttitude) throw new ArgumentException("Same attitude can not be reasigned!");
            if (voteFd is null)
            {
                await this.atttitudeRepo.AddAssync(new CommentAttitude
                {
                    ShitGiverId = userId,
                    CommentId = commentVote.Id,
                    Attitude = newAttitude
                });
            }
            else
            {
                voteFd.IsDeleted = false;
                voteFd.Attitude = newAttitude;
            }
            await atttitudeRepo.SaveChangesAsync();
            return await this.commentRepo.All().Where(x => x.Id == commentVote.Id && !x.IsDeleted).To<CommentLikeStatusDTOout>().FirstOrDefaultAsync();
        }
    }
}
