import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategoryDetails } from 'src/app/core/interfaces/categories/ICategoryDetails';
import { HelperService } from 'src/app/core/services/helper.service';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input()
  category: ICategoryDetails

  constructor(private authService: AuthService) { }

  @Output()
  deleteEvent: EventEmitter<{ name: string, id: number }> = new EventEmitter();
  askDelete() { this.deleteEvent.emit({ id: this.category.id, name: this.category.name }) }

  @Input()
  selectedCategory: BehaviorSubject<number>

  get createdBefore() { return HelperService.timeElapsed(this.category.dateOfCreation) }
  get editedBefore() { return HelperService.timeElapsed(this.category.dateOfLastEdit) }

  selectParentCategory() { this.selectedCategory.next(this.category.parentCategoryId) }

  get canEdit() { return this.authService.isAuthenticated() && (this.authService.isAdmin || this.authService.getUserInfo().userName === this.category.authorUserName) }
  get canDelete() { return this.canEdit && this.category.recipesCount === 0 && !this.category.hasChildren }
}
