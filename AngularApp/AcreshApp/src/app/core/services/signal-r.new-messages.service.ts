
import * as signalR from "@aspnet/signalr";
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root" })
export class SignalRNewMessagesService {
  public unreadCount = 0;
  private hubConnection: signalR.HubConnection

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/unread-messages')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => {
        console.log('Error while starting connection: ', err)
      })

    this.hubConnection.on("resetUnread", () => this.unreadCount = 0 );
  }
  closeConnection() {
    this.hubConnection.off;
  }

  setAllRead() {
    this.unreadCount = 0;
  }

  public monitorMessagesForUser = (userId: string) => {
    this.hubConnection.on('incrementUnread', (recieverId: string) => {
      this.unreadCount += userId === recieverId ? 1 : 0
    });
  }

  public monitorAllSeen = (userId: string) => {
    this.hubConnection.on('incrementUnread', (recieverId: string) => {
      this.unreadCount += userId === recieverId ? 1 : 0
    });
  }



}
