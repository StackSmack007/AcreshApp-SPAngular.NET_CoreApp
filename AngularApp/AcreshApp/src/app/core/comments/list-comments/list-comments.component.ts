import { Component, Input, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { IComment } from '../../interfaces/comments/IComment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'acr-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements AfterViewInit {

  @Input()
  recipeId: string;

  public isLoading = false;
  public endReached = false;
  private page = 1;

  comments: IComment[] = [];
  constructor(private authService: AuthService, private commentService: CommentsService, private toastr: ToastrService) {
  }

  ngAfterViewInit(): void {
    this.fetchComments();
  }

  get isLastCommentor(): boolean {
    return this.isLoggedIn && this.comments.length > 0 && this.comments[0].authorUserName === this.myInfo.userName
  }

  fetchComments() {
    if (this.endReached || this.isLoading) return;
    this.isLoading = true;
    this.commentService.getCommentsForRecipe(this.page++, this.recipeId).subscribe(coms => {
      if (coms.length === 0) { this.endReached = true; return }
      this.comments = this.comments.concat(coms);
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

    interface IComment {
      id: number,
      authorUserName: string,
      authorCookRank: number,
      authorAvatarPicture: string,
      dateModified: number,
      dateAdded: number,
      content: string,
      likers: string[],
      disLikers: string[],
    }

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
      this.comments.unshift(newCommentForDisplay);
    }, (e) => {
      this.toastr.error("Unsuccessful comment post", "Misfortune!");
      console.error("Comment sending error", e);
    }
    )
    console.log(newComment);
  }
}