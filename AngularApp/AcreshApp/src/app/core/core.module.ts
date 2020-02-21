import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTMLRaw } from './pipes/htmlRaw.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safeUrl.pipe';

@NgModule({
  declarations: [HTMLRaw,SafePipe],
  imports: [
    CommonModule, HttpClientModule, NgxSpinnerModule,FormsModule,ReactiveFormsModule
  ],
  exports: [NgxSpinnerModule,HTMLRaw,CommonModule,FormsModule,ReactiveFormsModule,SafePipe]
})
export class CoreModule { }
