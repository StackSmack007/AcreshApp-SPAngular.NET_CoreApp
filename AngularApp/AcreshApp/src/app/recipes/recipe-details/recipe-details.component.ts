import { Component, } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';
import { IRecipeDetails } from 'src/app/core/interfaces/recipeDetails';

@Component({
  selector: 'acr-rec-det',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  ratingNames = ["Distasteful", "Questionable", "Acceptable", "Recomendable", "Good", "Magnifique"]
  public recipe:IRecipeDetails = {
    name: "Боб с кюфтета",
    authorUserName: "User5",
    authorCookRank:"Wizard",
    rating: 3,
    category: "BreakFast",
    dateOfCreation: "vtornik",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam.",
    pictures: ["https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured.jpg",
      "https://www.justonecookbook.com/wp-content/uploads/2017/07/Spicy-Shoyu-Ramen-NEW-500x400.jpg",
      "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg"],
    videoLink: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
    votes: [{ name: "amet", vote: 3 }, { name: "aspar", vote: 4 }, { name: "chukcha", vote: 4 }],
    difficulty: 2,
    tags: ["kufteta", "bobove", "zaprujka", "bobec"],
    ingridients: [
      { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: false, isEssential: true },
      { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: true, isEssential: false },
      { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: false, isEssential: true }
    ],
    recipeFavorisers: ["Aladin", "Sebaidin", "Maradin", "Martin"],
  }

  get ratingProperties() {
    const currentRating = this.recipe.votes.reduce((acc, next, _, arr) => acc + (next.vote / arr.length), 0);
    const rating = Math.round(currentRating * 2) / 2;
    const result = {
      halfStar: rating - Math.floor(rating) > 0,
      positive: new Array(Math.floor(rating)),
      lacking: new Array(6 - Math.ceil(rating)),
      overal: Math.floor(rating) - 1,
      voterCount: this.recipe.votes.length,
      avRating: currentRating,
      ratingName: this.ratingNames[Math.floor(rating) - 1] 
    };
    return result;
  }

  get isFavourite() {
    return this.isLoggedIn && this.recipe.recipeFavorisers.includes(this.authService.getUserInfo().userName)
  }

  get dateAdded() {
    return "вторник";//TODO SWAP
    return HelperService.dateConvert(this.recipe.dateOfCreation,CustomDateFormats.DefaultFormater)
  }

  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  public defaultRatingOpt: number = this.authService.isAuthenticated() ? this.myVote : 0;
  get myVote(): number {
   if(!this.isLoggedIn) return 0;
    const mv=this.recipe.votes.find(x=>x.name);
    if(!mv) return 0;
    return mv.vote; 
  }

  rateBtnEnabled(choise) {
    if (!choise || +choise === 0) return false;
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