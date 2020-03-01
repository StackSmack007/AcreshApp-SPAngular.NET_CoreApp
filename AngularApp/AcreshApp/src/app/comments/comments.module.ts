import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { CommentComponent } from './comment/comment.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ListCommentsComponent, CommentComponent],
  imports: [
    CommonModule,CoreModule
  ],
  exports: [ListCommentsComponent]
})
export class CommentsModule { }
