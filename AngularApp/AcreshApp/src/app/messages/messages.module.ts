import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllComponent } from './list-all/list-all.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListAllComponent, MessageDisplayComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[MessageDisplayComponent]
})
export class MessagesModule { }
