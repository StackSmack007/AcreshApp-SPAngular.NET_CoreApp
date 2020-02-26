import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IComment } from '../../interfaces/comments/IComment';

@Component({
  selector: 'acr-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private authService: AuthService) { }
  @Input()
  comment: IComment = {
    id: 1,
    authorUserName: "Kuncho",
    authorAvatarPicture: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    dateAdded: 3456789,
    dateModified: 3456789,
    content: "Lorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem LoremLorem Ipsum Lorem Lorem",
    likers: ["User12", "User2", "User3"],
    disLikers: ["User5", "User6", "User7"],
  }

  get isLikeAble() {
    return this.authService.isAuthenticated() && !this.comment.likers.includes(this.authService.getUserInfo().userName)
  }
  get isDislikeAble() {
    return this.authService.isAuthenticated() && !this.comment.disLikers.includes(this.authService.getUserInfo().userName)
  }

  get timeEdited() {
    const timeDifference = Date.now()/1000 - this.comment.dateModified; // Unix timestamp in milliseconds
    if (timeDifference < 3600) return `${Math.floor((timeDifference) / 60)} mins ago`
    if (timeDifference < 3600 * 24) return `${Math.floor((timeDifference) / (60 * 60))} hours ago`
    if (timeDifference < 3600 * 24 * 30) return `${Math.floor((timeDifference) / (24 * 60 * 60))} days ago`

return "no idea";
    // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(this.comment.dateModified);
    // debugger;

    // return `${d.getDate}`
  }

  ngOnInit(): void {
  }

  giveLike() {
    if (!this.isLikeAble) return;
  }

  giveDisLike() {
    if (!this.isDislikeAble) return;
  }
}
