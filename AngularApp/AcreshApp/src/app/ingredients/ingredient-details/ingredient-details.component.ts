import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent implements OnInit {

  @Input()
   ingredient= {
    id: 12,
    name:"Cinamon",
    isVegan: false,
    origin: "Plant",
    lastModified: 32213,
    usageCount: 312,
    authorUserName: "User1",
    isDeletable: true,
    measureType:"Weight_Units",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus nisi minus tempore molestias. Modi incidunt esse nulla veritatis ipsam iusto quia eveniet optio, qui consequatur ipsa aliquam provident suscipit?"
  }

  constructor(private authService: AuthService) { }

  private get myInfo() { return this.authService.getUserInfo(); }


  get isEditAuthorised() { return this.myInfo.userName === this.ingredient.authorUserName || this.authService.isAdmin; }
  get isDeleteAuthorised() { return this.ingredient.isDeletable && this.isEditAuthorised }

  ngOnInit(): void {
  }

get modificationDate() {
  return "31.12.2002";
//TODO...
}


}
