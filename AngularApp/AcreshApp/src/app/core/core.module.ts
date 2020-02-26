import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTMLRaw } from './pipes/htmlRaw.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safeUrl.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HTMLRaw,SafePipe],
  imports: [
    CommonModule, HttpClientModule, NgxSpinnerModule,FormsModule,ReactiveFormsModule,  BrowserModule, BrowserAnimationsModule,AppRoutingModule
  ],
  exports: [NgxSpinnerModule,HTMLRaw,CommonModule,FormsModule,ReactiveFormsModule,SafePipe,BrowserModule, BrowserAnimationsModule,AppRoutingModule
  ]
})
export class CoreModule { }
