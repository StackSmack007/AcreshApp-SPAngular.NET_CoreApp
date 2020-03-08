import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acr-list-all',
  templateUrl: './list-all.component.html',
})
export class ListAllComponent implements OnInit {


  get title(): string { return "<i class='fas fa-scroll'></i>&nbsp; All Recipes..." }

  constructor() { }

  ngOnInit(): void {
  }

}
