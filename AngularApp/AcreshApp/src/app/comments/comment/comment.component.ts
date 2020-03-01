import { Component, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { CommentsService } from 'src/app/core/services/comments.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ICommentLikeStatus } from 'src/app/core/interfaces/comments/ILikesCommentStatus';
import { ICommentContentStatus } from 'src/app/core/interfaces/comments/ICommentContentStatus';
import { IComment } from 'src/app/core/interfaces/comments/IComment';
import { NgForm } from '@angular/forms';
import { CookRank } from 'src/app/core/enumerations/CookRank';

@Component({
  selector: 'acr-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements AfterViewInit {

  editModeOn: boolean = false;
  editModeSwitch() { this.editModeOn = !this.editModeOn }
  private originalContent: string = null;
  ngAfterViewInit(): void { this.originalContent = this.comment.content; }

  constructor(private authService: AuthService, private commentService: CommentsService) { }

  @Output()
  changeLikesEvent: EventEmitter<ICommentLikeStatus> = new EventEmitter<ICommentLikeStatus>();

  @Output()
  changeContentEvent: EventEmitter<ICommentContentStatus> = new EventEmitter<ICommentContentStatus>();

  @Output()
  deleteCommentEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  comment: IComment = {
    id: 1,
    authorCookRank: 1,
    authorUserName: "Kuncho",
    authorAvatarPicture: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    dateAdded: 3456789,
    dateModified: 3456789,
    content: "Lorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem Lorem",
    likers: ["User12", "User2", "User3"],
    disLikers: ["User5", "User6", "User7"],
  }

  @Input()
  recipeAuthorUserName: string;

  get cookRank() {
    return CookRank[this.comment.authorCookRank];
  }

  get isLikeAble() {
    return this.authService.isAuthenticated() && !this.comment.likers.includes(this.authService.getUserInfo().userName)
  }
  get isDislikeAble() {
    return this.authService.isAuthenticated() && !this.comment.disLikers.includes(this.authService.getUserInfo().userName)
  }

  get timeEdited() {
    const timeDifference = Date.now() / 1000 - this.comment.dateModified; // Unix timestamp in milliseconds
    if (timeDifference < 3600) return `${Math.floor((timeDifference) / 60)} mins ago`
    if (timeDifference < 3600 * 24) return `${Math.floor((timeDifference) / (60 * 60))} hours ago`
    if (timeDifference < 3600 * 24 * 30) return `${Math.floor((timeDifference) / (24 * 60 * 60))} days ago`

    return "no idea";
    // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(this.comment.dateModified);
    // debugger;

    // return `${d.getDate}`
  }

  giveLike() {
    if (!this.isLikeAble) return;
    this.commentService.setVote(this.comment.id, true).subscribe(x => this.changeLikesEvent.emit(x));
  }

  giveDisLike() {
    if (!this.isDislikeAble) return;
    this.commentService.setVote(this.comment.id, false).subscribe(x => this.changeLikesEvent.emit(x));
  }

  get canDelete() {
    return this.authService.isAuthenticated() &&
      (this.authService.isAdmin || [this.comment.authorUserName, this.recipeAuthorUserName].includes(this.authService.getUserInfo().userName))
  }
  get canEdit() { return this.authService.isAuthenticated() && this.comment.authorUserName === this.authService.getUserInfo().userName }

  del() {
    this.deleteCommentEvent.emit(this.comment.id);
  }

  editComment(form: NgForm) {
    const { editedContent } = form.value;
    if (form.invalid || editedContent === this.originalContent) return;
    const dateModified = Date.now() / 1000;
    const commentStatus: ICommentContentStatus = { id: this.comment.id, content: editedContent, dateModified };
    this.commentService.editContent(commentStatus).subscribe(() => {
      this.changeContentEvent.emit(commentStatus);
      return this.editModeSwitch();
    });
    console.log('contentChanged');
  }

  abortEdit() {
    this.comment.content = this.originalContent;
  }


}
