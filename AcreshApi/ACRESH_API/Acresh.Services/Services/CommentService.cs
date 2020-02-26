using Acresh.Services.DBRepository.Contracts;
using Acresh.Services.Services.Contracts;
using Common.AutomapperConfigurations;
using DataTransferObjects.Comments;
using Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Acresh.Services.Services
{
 public   class CommentService: ICommentService
    {
        private readonly IRepository<RecipeComment> commentRepo;

        public CommentService(IRepository<RecipeComment> commentRepo)
        {
            this.commentRepo = commentRepo;
        }


        public IQueryable<CommentDTOout> GetCommentsForRecipe(string recipeId,bool allComments=false)
        {
          var result= this.commentRepo.All().Where(x => x.IsDeleted == allComments && x.RecipeId == recipeId).OrderByDescending(x => x.DateOfCreation).To<CommentDTOout>();
            return result;
        }


        
    }
}
