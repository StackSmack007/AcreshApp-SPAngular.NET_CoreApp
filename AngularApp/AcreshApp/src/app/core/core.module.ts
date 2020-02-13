import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule, NgxSpinnerModule
  ],
  exports: [NgxSpinnerModule]
})
export class CoreModule { }
