import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTMLRaw } from './pipes/htmlRaw.pipe';

@NgModule({
  declarations: [HTMLRaw],
  imports: [
    CommonModule, HttpClientModule, NgxSpinnerModule
  ],
  exports: [NgxSpinnerModule,HTMLRaw,CommonModule]
})
export class CoreModule { }
