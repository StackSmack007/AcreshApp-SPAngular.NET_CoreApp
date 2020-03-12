import { Component, OnInit } from '@angular/core';
import { CategoryNode } from 'src/app/core/interfaces/categories/CategoryNode';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategoryDetails } from 'src/app/core/interfaces/categories/ICategoryDetails';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'acr-list-all-categories',
  templateUrl: './list-all-categories.component.html',
  styleUrls: ['./list-all-categories.component.css']
})
export class ListAllCategoriesComponent implements OnInit {

  action: null | "details" | "create" | "edit" = null

  categories: CategoryNode[] = null;

  selectedCategory: BehaviorSubject<number> = new BehaviorSubject<number>(-1)

  constructor(private catService: CategoryService) {
    catService.getThreeStructure().subscribe((x: CategoryNode[]) => {
      this.categories = x;
    });

    this.selectedCategory.subscribe(id => {
      if (id > 0) { this.action = "details"; }
      this.dataObj.info$ = this.catService.getDetails(id);
    })

  }

  ngOnInit(): void {
  }

  dataObj: { info$: Observable<ICategoryDetails> } = { info$: null }

}
