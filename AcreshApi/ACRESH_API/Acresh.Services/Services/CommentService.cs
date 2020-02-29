using Acresh.Services.DBRepository.Contracts;
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

        public async Task SetDeleteAsync(int comId, string userId, bool isAdmin)
        {
            var commentFd = await this.commentRepo.All().Include(x => x.Recipe).FirstOrDefaultAsync(x => x.Id == comId && !x.IsDeleted);
            if (commentFd is null) throw new InvalidOperationException("comment not found or is already deleted");
            if (!isAdmin && commentFd.AuthorId != userId && commentFd.Recipe.AuthorId != userId)
            {
                throw new InvalidOperationException("Not authorized! You must be admin, recipe author or comment-author to delete comment.");
            }
            commentFd.IsDeleted = true;
            await this.commentRepo.SaveChangesAsync();
        }

        public async Task ChangeContentAsync(CommentContentDTOin commentContent, string userId)
        {
            var commentFd = await this.commentRepo.All().FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == commentContent.Id);
            if (commentFd is null) throw new ArgumentException($"Comment with id {commentContent.Id} was not found!");
            if (commentFd.AuthorId != userId) throw new ArgumentException("Not authorized!, Only author of comment can modify it's content!");
            commentFd.Content = commentContent.Content;
            commentFd.DateOfLastEdit = (new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).AddSeconds(commentContent.DateModified);
            await commentRepo.SaveChangesAsync();
        }
    }
}
