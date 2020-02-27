﻿using Acresh.Services.Services.Contracts;
using DataTransferObjects.Comments;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ACRESH_API.Controllers
{
    public class CommentsController : BaseController
    {

        private const int FETCH_PORTION = 3;

        private readonly ICommentService commentService;

        public CommentsController(ICommentService commentService)
        {
            this.commentService = commentService;
        }

        [HttpGet("for-recipe")]
        public async Task<ActionResult<CommentDTOout[]>> GetCommentsForRecipe(int page, string recipeId)
        {
            var result = await this.commentService.GetCommentsForRecipe(recipeId).Skip((page - 1) * FETCH_PORTION).Take(FETCH_PORTION).ToArrayAsync();
            return result;
        }

        [Authorize]
        [HttpPost()]
        public async Task<ActionResult<int>> SubmitComment(CommentDTOin comment)
        {
            try
            {
                if (comment.AuthorId != UserId) throw new ArgumentOutOfRangeException("Invalid User Credentials!");
                int newId = await this.commentService.SubmitComment(comment);
                return newId;
            }
            catch (ArgumentOutOfRangeException ex)
            {
                return BadRequest(new { reason = ex.Message });
            }
        }
    }
}
