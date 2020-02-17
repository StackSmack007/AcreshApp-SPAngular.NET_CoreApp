import { Component, } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-rec-det',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  public recipeOptions = ["Distasteful", "Questionable", "Acceptable", "Recomendable", "Good", "Magnifique"]
  public voterCount = 78;
  private currentRating = 4.35;
  get starCondition() {
    let rating = Math.round(this.currentRating * 2) / 2;
    let result = {
      halfStar: rating - Math.floor(rating) > 0,
      positive: new Array(Math.floor(rating)),
      lacking: new Array(6 - Math.ceil(rating)),
      overal: Math.floor(rating) - 1
    };
    return result;
  }

  get isFavourite() {
    //todoCheck....
    return false;
  }

  public pictures = ["https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured.jpg",
    "https://www.justonecookbook.com/wp-content/uploads/2017/07/Spicy-Shoyu-Ramen-NEW-500x400.jpg",
    "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg"]



  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  public defaultRatingOpt: number = this.authService.isAuthenticated() ? this.myVote : 0;
  get myVote(): number {
    return 3; //TODO REPLACE!!!
  }

  rateBtnEnabled(choise) {
    if (!choise) return false;

    console.log(this.authService.isAuthenticated(), +choise > 0, +choise !== this.myVote);
    return this.authService.isAuthenticated() && +choise > 0 && +choise !== this.myVote;
  }

  makeVote(ch) {
    console.log(ch);
  }

  favUnfav() {
    if (!this.isLoggedIn) return;
    if (this.isFavourite) {
      // remove from favourites and update signalR!
      return;
    }
    // add to favourites and update signalR!
  }

  constructor(private authService: AuthService, ) { }

}
