import { Component, Input, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { IComment } from '../../interfaces/comments/IComment';
import { ToastrService } from 'ngx-toastr';
import { SignalRRecipeDetailsService } from '../../services/signal-r.recipe-details.service';
import { CommentLikeStatus } from '../../interfaces/comments/ILikesCommentStatus';

@Component({
  selector: 'acr-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements AfterViewInit {

  @Input()
  recipeId: string;

  @Input()
  recipeAuthorUserName:string;

  @Input()
  signalR: SignalRRecipeDetailsService = null;

  public isLoading = false;
  public endReached = false;
  private page = 1;

  comments: IComment[] = [];
  constructor(private authService: AuthService, private commentService: CommentsService, private toastr: ToastrService) {
  }

  ngAfterViewInit(): void {
    this.fetchComments();
    this.signalR.monitorComments(this.comments);
  }

  get isLastCommentor(): boolean {
    return this.isLoggedIn && this.comments.length > 0 && this.comments[0].authorUserName === this.myInfo.userName
  }

  fetchComments() {
    if (this.endReached || this.isLoading) return;
    this.isLoading = true;
    this.commentService.getCommentsForRecipe(this.page++, this.recipeId).subscribe(coms => {
      if (coms.length === 0) { this.endReached = true; return }
      this.comments.splice(this.comments.length, 0, ...coms);
    }).add(() => { this.isLoading = false; });
  }

  onScroll({ target }) {
    if (!this.scrolSayLoad(target)) { return }
    this.fetchComments();
  }

  scrolSayLoad = (target) => target.scrollHeight - (target.scrollTop + target.clientHeight) < 20

  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  get myInfo() {
    return this.isLoggedIn ? this.authService.getUserInfo() : null;
  }

  submitComment({ content }) {
    if (content.length < 4 || !this.isLoggedIn) return;
    const newComment = { content, authorId: this.authService.getUserInfo().id, recipeId: this.recipeId }

    this.commentService.postComment(newComment).subscribe((id) => {
      const timeNow = Date.now() / 1000;
      const newCommentForDisplay: IComment = {
        id,
        authorUserName: this.myInfo.userName,
        authorCookRank: this.myInfo.cookRank,
        authorAvatarPicture: this.myInfo.avPic,
        dateAdded: timeNow,
        dateModified: timeNow,
        likers: [],
        disLikers: [],
        content,
      }
      this.signalR.addComment(newCommentForDisplay)
    }, (e) => {
      this.toastr.error("Unsuccessful comment post", "Misfortune!");
      console.error("Comment sending error", e);
    })
  }

  changeLikes(status: CommentLikeStatus) {
    this.signalR.changeCommentVote(status);
  }

  deleteComment(id: number) {
    this.commentService.del(id).subscribe(() => this.signalR.removeComment(id))
  }


}