import { Component, OnInit, Input } from '@angular/core';
import { ICategoryDetails } from 'src/app/core/interfaces/categories/ICategoryDetails';
import { HelperService } from 'src/app/core/services/helper.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'acr-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  category: ICategoryDetails

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  selectedCategory: BehaviorSubject<number>

  get createdBefore() { return HelperService.timeElapsed(this.category.dateOfCreation); }
  get editedBefore() { return HelperService.timeElapsed(this.category.dateOfLastEdit); }
}