import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipeMiniInfo } from 'src/app/core/interfaces/recipes/recipeMiniInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'acr-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  recipe$: Observable<IRecipeMiniInfo> = null;
  private routeAdr: string = null;

  constructor(route: ActivatedRoute, recipeService: RecipeService) {
    this.routeAdr = route.snapshot.url[0].path
    console.log(this.routeAdr);

  }

  ngOnInit(): void {
  }

}
