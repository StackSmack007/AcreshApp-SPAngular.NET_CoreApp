import { Component } from '@angular/core';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IIngredientCreate } from 'src/app/core/interfaces/ingredients/IIngredientCreate';

@Component({
  selector: 'acr-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent {

  settings = { headline: "Create New Ingredient", submitBtnTitle: "<i class='fas fa-plus-circle'></i> &nbsp; Create" };
  constructor(private ingService: IngredientService, private router: Router, private toastr: ToastrService) { }

  createIngredient(value:IIngredientCreate) {
    this.ingService.createIngredient(value).subscribe(id => {
      this.toastr.success("Created new Ingredient", "Congratulations!");
      this.router.navigate(['/ingredients', { outlets: { 'ing-outlet': ['details', id] } }])
    }, (e) => {
      this.toastr.success("No igredient was created", "Failure!");
      debugger;
      console.error("Problem",e);
    })
  }
}
