import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent,MainComponent]
})
export class SharedModule { }
