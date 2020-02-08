import { Component,  ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/core/services/message.service';
import { Observable } from 'rxjs';
import { IMessageRecieved } from 'src/app/core/interfaces/message-interfaces/messageRecieve';
import { map } from 'rxjs/operators';

@Component({
  selector: 'acr-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent {

  private all$: Observable<IMessageRecieved[]> = null;
  public nonDeleted$: Observable<IMessageRecieved[]> = null;
  public deleted$: Observable<IMessageRecieved[]> = null;
  public sent$: Observable<IMessageRecieved[]> = null;
  @ViewChild("defaultTab", {static:true})
  defaultTab: ElementRef;

  constructor(authService: AuthService, private messageService: MessageService) {
    this.all$ = this.messageService.getRecievedMessages()
    this.nonDeleted$ = this.all$.pipe(map(res => res.slice().filter(x => !x.isDeleted)));
    this.deleted$ = this.all$.pipe(map(res => res.slice().filter(x => x.isDeleted)));
    this.sent$=this.messageService.getSentMessages()
    //TODO
  }


}
