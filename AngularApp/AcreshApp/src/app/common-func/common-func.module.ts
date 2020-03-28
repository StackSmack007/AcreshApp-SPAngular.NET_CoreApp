import { NgModule } from '@angular/core';
import { CauldronComponent } from './cauldron/cauldron.component';
import { CouldronIngCartComponent } from './couldron-ing-cart/couldron-ing-cart.component';
import { CouldronRecCardComponent } from './couldron-rec-card/couldron-rec-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [CauldronComponent, CouldronIngCartComponent, CouldronRecCardComponent],
  imports: [
    AppRoutingModule, CoreModule, 
  ]
})
export class CommonFuncModule { }
