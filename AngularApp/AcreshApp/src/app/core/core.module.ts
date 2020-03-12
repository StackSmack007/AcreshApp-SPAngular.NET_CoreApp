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
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopoverModule } from "ngx-smart-popover";
import { ClassIfClassDirective } from './directives/class-if-class.directive';
import { DialogQuestionComponent } from './components/questionComponent/dialog-question.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [HTMLRaw, SafePipe, ClassIfClassDirective, DialogQuestionComponent],
  imports: [
    CommonModule, HttpClientModule, NgxSpinnerModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, PopoverModule, MaterialModule
  ],
  exports: [ ClassIfClassDirective, NgxSpinnerModule, HTMLRaw, CommonModule, FormsModule, ReactiveFormsModule, SafePipe, BrowserModule, BrowserAnimationsModule, AppRoutingModule, PopoverModule, MaterialModule
  ]
})
export class CoreModule { }
