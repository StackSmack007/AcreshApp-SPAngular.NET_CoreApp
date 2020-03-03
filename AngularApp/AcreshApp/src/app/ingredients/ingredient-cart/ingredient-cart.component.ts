import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'acr-ingredient-cart',
  templateUrl: './ingredient-cart.component.html',
  styleUrls: ['./ingredient-cart.component.css']
})
export class IngredientCartComponent implements OnInit {

@Output()
loadIngrEvent: EventEmitter<number>=new EventEmitter<number>();
@Input()
ingredient ={
  id:12,
  imgURL:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
  usage:123,
  name:"Kanela",
  isVegan:false,
  origin:"Plant",
  lastEditted:234343,
  authorUserName:"User1215"
}


  constructor() { }

  ngOnInit(): void {
  }

loadIngredientInfo(){
  console.log("ing123");
  this.loadIngrEvent.emit(this.ingredient.id);
}


}
