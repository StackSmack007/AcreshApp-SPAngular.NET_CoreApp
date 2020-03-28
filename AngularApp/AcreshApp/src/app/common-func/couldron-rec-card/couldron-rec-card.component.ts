import { Component, Input } from '@angular/core';
import { ICauldronRecipeCard } from 'src/app/core/interfaces/recipes/ICauldronRecipeCard';
import { CookRank } from 'src/app/core/enumerations/CookRank';

@Component({
  selector: 'acr-couldron-rec-card',
  templateUrl: './couldron-rec-card.component.html',
  styleUrls: ['./couldron-rec-card.component.css']
})
export class CouldronRecCardComponent  {


  @Input()
  recipe: ICauldronRecipeCard = {
    id: 'asssadasdasda',
    name: 'Ramen',
    categoryName: 'Deserts',
    categoryId: 3,
    authorUserName: 'Manuel',
    authorCookRank: 1,
    mainPicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg',
    ingredients: [
      { name: 'Chesun', id: 3 },
      { name: 'Kopur', id: 5 },
      { name: 'Magdanoz', id: 2 },
      { name: 'Salt', id: 1 }
    ]
  }

  get cookRank() {
    return CookRank[this.recipe.authorCookRank];
  }

  constructor() { }



}
