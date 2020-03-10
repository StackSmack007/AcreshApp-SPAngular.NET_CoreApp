import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: './nsh-dialog-question',
    templateUrl: './dialog-question.component.html',
    styleUrls: ['./dialog-question.component.css'],
})
export class DialogQuestionComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogQuestionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}


export interface DialogData {
    title: string;
    question: string;
    picUrl: string;
    positiveAnswerBtnName: string;
    negativeAnswerBtnName: string;
}