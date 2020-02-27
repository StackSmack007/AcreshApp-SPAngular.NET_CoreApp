using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using AutoMapper;
using Common.AutomapperConfigurations;
using DataTransferObjects.Comments;
using Infrastructure.Models;
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

        public CommentService(IRepository<RecipeComment> commentRepo, IRepository<Recipe> recipeRepo, IMapper mapper)
        {
            this.commentRepo = commentRepo;
            this.recipeRepo = recipeRepo;
            this.mapper = mapper;
        }
        
        public IQueryable<CommentDTOout> GetCommentsForRecipe(string recipeId, bool allComments = false)
        {
            var result = this.commentRepo.All().Where(x => x.IsDeleted == allComments && x.RecipeId == recipeId).OrderByDescending(x => x.DateOfCreation).To<CommentDTOout>();
            return result;
        }

        public async Task<int> SubmitComment(CommentDTOin comment)
        {
            bool recipeExists = await recipeRepo.All().AnyAsync(x => x.Id == comment.RecipeId && !x.IsDeleted);
            if (!recipeExists) throw new ArgumentOutOfRangeException("Recipe not found!");
            RecipeComment new_comment = mapper.Map<RecipeComment>(comment);
            await this.commentRepo.AddAssync(new_comment);
            await this.commentRepo.SaveChangesAsync();
            return new_comment.Id;
        }
    }
}
