import { Component, } from '@angular/core';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IIngredientEdit } from 'src/app/core/interfaces/ingredients/IIngredientEdit';
import { IIngredientCreate } from 'src/app/core/interfaces/ingredients/IIngredientCreate';
import { IIngredientDetails } from 'src/app/core/interfaces/ingredients/IIngredientDetails';

@Component({
  selector: 'acr-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.css']
})
export class EditIngredientComponent {

  private id: number;
  ingredient: IIngredientDetails;
  settings = { headline: "Edit Ingredient", submitBtnTitle: "<i class='fas fa-edit'></i> &nbsp; Edit" };
  constructor(private ingService: IngredientService, private router: Router, private toastr: ToastrService, route: ActivatedRoute) {
    this.ingredient = route.snapshot.data.data;
    this.id=this.ingredient.id;
    delete this.ingredient.id;
  }

  editIngredient(value: IIngredientCreate) {
    debugger;
    let editValue: IIngredientEdit = { ...value, ...{ id: this.id } };
    // this.ingService.editIngredient(editValue).subscribe(id => {
    //   this.toastr.success("Edited ingredient :)", "Congratulations!");
    //   this.router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', id] } }])
    // }, (e) => {
    //   this.toastr.success("No igredient was eddited :(", "Failure!");
    //   debugger;
    //   console.error("Problem", e);
    // })
  }

}
