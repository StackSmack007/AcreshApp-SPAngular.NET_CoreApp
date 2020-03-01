import { Component, OnDestroy, } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';
import { IRecipeDetails } from 'src/app/core/interfaces/recipeDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { SignalRRecipeDetailsService } from 'src/app/core/services/signal-r.recipe-details.service';
import { CookRank } from 'src/app/core/enumerations/CookRank';
import { RecipeDifficulty } from 'src/app/core/enumerations/RecipeDifficulty';


@Component({
  selector: 'acr-rec-det',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnDestroy {
  ratingNames = ["Distasteful", "Questionable", "Acceptable", "Recomendable", "Good", "Magnifique"]

  constructor(
    private router:Router,
    route: ActivatedRoute, 
    private authService: AuthService,
    private recipeService: RecipeService, 
    public singalRService: SignalRRecipeDetailsService) {
    this.recipe = route.snapshot.data.data;
    singalRService.startConnection(this.recipe);
  }

  get cookRank() {
    return CookRank[this.recipe.authorCookRank];
  }

  get difficulty() {
    return RecipeDifficulty[this.recipe.difficulty];
  }

  get tags() {
    return this.recipe.tags.join(", ");
  }
  public recipe: IRecipeDetails = null;
  // {
  //   id: "2safdg2sadsadasd",
  //   name: "Боб с кюфтета",
  //   authorUserName: "User5",
  //   authorCookRank: "Wizard",
  //   categoryName: "BreakFast",
  //   dateOfLastEdit: "2/18/2020 8:18:57 PM",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti necessitatibus odit illum incidunt autem soluta molestiae officia iusto doloremque voluptates facilis vero cumque, voluptatum, tenetur ullam blanditiis deserunt magnam.",
  //   pictures: ["https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured.jpg",
  //     "https://www.justonecookbook.com/wp-content/uploads/2017/07/Spicy-Shoyu-Ramen-NEW-500x400.jpg",
  //     "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg"],
  //   videoLink: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
  //   votes: [{ name: "amet", vote: 3 }, { name: "aspar", vote: 4 }, { name: "chukcha", vote: 4 }, { name: "User1", vote: 3 }],
  //   difficulty: 2,
  //   tags: ["kufteta", "bobove", "zaprujka", "bobec"],
  //   ingredients: [
  //     { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: false, isEssential: true },
  //     { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: true, isEssential: false },
  //     { name: "Tomato", ammount: "2 spns", picURL: "https://cdn.ruled.me/wp-content/uploads/2019/09/ramen-bowl-featured.jpg", id: 2, isVegan: false, isEssential: true }
  //   ],
  //   favorizers: ["Aladin", "Sebaidin", "Maradin", "Martin"],
  // }

  get isEditAuthorized() {
    return this.authService.isAdmin || this.myName === this.recipe.authorUserName;
  }

trimAppropriate(str:string,maxLength){
  let res=str.slice(0,maxLength);
  let lastSpace=res.lastIndexOf(' ');
  return res.slice(0,lastSpace) + "...";
}

  goToEdit(){
    this.router.navigate(["/recipes/edit",this.recipe.id]);
  }

  get videoLink() {
    if (!this.recipe.videoLink) return null;
    const id = this.recipe.videoLink.substr(this.recipe.videoLink.indexOf("v=") + 2 || this.recipe.videoLink.lastIndexOf("\\") + 1);
    return HelperService.videoLinkMake(id);
  }

  get ratingProperties() {
    const meaningfullVotes = this.recipe.votes.slice().filter(v => v.vote > 0);
    const currentRating = meaningfullVotes.reduce((acc, next, _, arr) => acc + (next.vote / arr.length), 0);
    const rating = Math.round(currentRating * 2) / 2;
    const result = {
      halfStar: rating - Math.floor(rating) > 0,
      positive: new Array(Math.floor(rating)),
      lacking: new Array(6 - Math.ceil(rating)),
      overal: Math.floor(rating) - 1,
      voterCount: meaningfullVotes.length,
      avRating: currentRating,
      ratingName: meaningfullVotes.length > 1 ? this.ratingNames[Math.floor(rating) - 1] : "No votes yet!"
    };
    return result;
  }

  get isFavourite() {
    return this.isLoggedIn && this.recipe.favorizers.includes(this.authService.getUserInfo().userName)
  }

  get dateAdded() {
    return HelperService.dateConvert(this.recipe.dateOfLastEdit, CustomDateFormats.DefaultFormater)
  }

  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  get myVote(): number {
    if (!this.isLoggedIn || !this.recipe) return 0;
    const mv = this.recipe.votes.find(x => x.name === this.myName);
    if (!mv) return 0;
    return mv.vote;
  }
  set myVote(v) { console.log(v) }//this getter is bound as default value of select btn!

  rateBtnEnabled({ choise }) {
    if (isNaN(choise) + choise === 0) return false;
    return this.authService.isAuthenticated() && +choise > 0 && +choise !== this.myVote;
  }

  makeVote({ choise }) {
    choise = +choise;
    if (![1, 2, 3, 4, 5, 6].includes(choise)) return;
    this.recipeService.rateRecipe(this.recipe.id, choise).subscribe(() => {
      let myVoting = this.recipe.votes.find(x => x.name === this.myName);
      if (myVoting) {
        myVoting.vote = choise;
      } else {
        this.recipe.votes.push({ name: this.myName, vote: choise });
      }
      this.singalRService.patchRecipeData({ votes: this.recipe.votes })
    })
  }

  get myName() {
    if (!this.isLoggedIn) return null;
    return this.authService.getUserInfo().userName;
  }

  favUnfav() {
    if (!this.isLoggedIn) return;

    this.recipeService.favUnfavRecipe(this.recipe.id).subscribe(i_favedR => {
      if (i_favedR && !this.recipe.favorizers.includes(this.myName)) {
        this.recipe.favorizers.push(this.myName);
      } else if (!i_favedR && this.recipe.favorizers.includes(this.myName)) {
        this.recipe.favorizers = this.recipe.favorizers.filter(n => n !== this.myName);
      }
      this.singalRService.patchRecipeData({ favorizers: this.recipe.favorizers });
    })
  }

  ngOnDestroy(): void {
    this.singalRService.stopConnection();
  }
}