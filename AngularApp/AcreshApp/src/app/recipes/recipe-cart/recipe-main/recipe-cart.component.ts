import { Component, OnInit, } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';
import { HelperService, CustomDateFormats as CustomDateFormats } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-recipe-cart',
  templateUrl: './recipe-cart.component.html',
  styleUrls: ['./recipe-cart.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1500, style({ opacity: 1 }))
      ])
    ])
  ]
})

export class RecipeCartComponent implements OnInit {

  public recipe: IRecipeMiniInfo = {
    id: "someId",
    name: "Ramen",
    description: "More description! Lorem, ipsum dolor sit amet consectetur adipisicing elit.Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium uttotam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium ut totam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium ut totam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam! Lorem, ipsum dolor sit amet consectetur adipisicingelit. Debitis molestiae quae voluptate, vitae cumque aspernatur fugit autem quo minus accusantium ut totam delectus maxime, velit reiciendis obcaecati, quasi sit ipsam!",
    mainPicture: "https://prods3.imgix.net/images/articles/2017_08/Non-feature-cold-summer-ramen-recipe-noodle-soup1.jpg?auto=format%2Ccompress&ixjsv=2.2.3",
    authorUserName: "User12",
    authorCookRank: "Chef",
    dateOfCreation: "Wed Feb 12 2020 17:59:25 GMT+0200 (Eastern European Standard Time)",
    subInfo: {
      rating: 7,
      category:"BreakFast",
      commentsCount: 0,
      ingredientsCount:4,
      difficulty: "Hard",
      fans: 0,
    }
  }

  constructor(private help:HelperService) { }

  infoShown: boolean = false;
  ngOnInit(): void {
  }
  
  displayInfo(timeDelay: number = 1000) {
    setTimeout(() =>
    this.infoShown = true, timeDelay)
  }
  
  hideInfo(timeDelay: number = 1000) {
    setTimeout(() =>
    this.infoShown = false, timeDelay)
  }
  
  get date(){
  return this.help.dateConvert(this.recipe.dateOfCreation,CustomDateFormats.DefaultFormater)
  }

}