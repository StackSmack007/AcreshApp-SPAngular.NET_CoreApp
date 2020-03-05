import { Component, Input, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { IIngredientDetails } from 'src/app/core/interfaces/ingredients/IIngredient-card';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent implements AfterViewInit {

  ingredient: IIngredientDetails = null;
  // {
  //   id: 12,
  //   name: "Cinamon",
  //   picUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
  //   isVegan: false,
  //   origin: "Plant",
  //   lastModified: 32213,
  //   usageCount: 312,
  //   authorUserName: "User1",
  //   measureType: "Weight_Units",
  //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?"
  // }

  @Input()
  chosenIngrId: BehaviorSubject<number>

  constructor(private authService: AuthService, private ingService: IngredientService) {}

  private get myInfo() { return this.authService.getUserInfo(); }

  get isEditAuthorised() { return this.myInfo.userName === this.ingredient.authorUserName || this.authService.isAdmin; }
  get isDeleteAuthorised() { return this.ingredient.usageCount === 0 && this.isEditAuthorised }

  ngAfterViewInit(): void {
    this.chosenIngrId.subscribe(id => {
      if(!id) return;
      this.ingService.getIngredientDetails(id).subscribe(det => this.ingredient = det)
    })
  }

  get modificationDate() { return HelperService.timeElapsed(this.ingredient.lastModified)}
}