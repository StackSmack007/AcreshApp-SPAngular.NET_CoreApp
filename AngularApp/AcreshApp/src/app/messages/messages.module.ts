import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllComponent } from './list-all/list-all.component';
import { RouterModule } from '@angular/router';
import { MessageRecievedComponent } from './message-display-recieved/message-recieved.component';
import { MessageSentComponent } from './message-display-sent/message-sent.component';




@NgModule({
  declarations: [ListAllComponent, MessageRecievedComponent, MessageSentComponent],
  imports: [
    CommonModule, RouterModule
  ],

})
export class MessagesModule { }
