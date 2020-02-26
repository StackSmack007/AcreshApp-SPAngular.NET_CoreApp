import { Component, Input, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommentsService } from '../../services/comments.service';
import { IComment } from '../../interfaces/comments/IComment';

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
  constructor(private authService: AuthService, private commentService: CommentsService) {
  }

  ngAfterViewInit(): void {
    this.fetchComments();
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

  submitComment(value) {
    if (value["newComment"].length < 4) return;
    console.log(value);
  }
}