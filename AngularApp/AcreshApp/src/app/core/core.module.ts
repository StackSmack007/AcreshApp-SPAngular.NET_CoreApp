import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTMLRaw } from './pipes/htmlRaw.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HTMLRaw],
  imports: [
    CommonModule, HttpClientModule, NgxSpinnerModule,FormsModule
  ],
  exports: [NgxSpinnerModule,HTMLRaw,CommonModule,FormsModule]
})
export class CoreModule { }
