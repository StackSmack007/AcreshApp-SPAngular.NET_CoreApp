
import * as signalR from "@aspnet/signalr";
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root" })
export class SignalRNewMessagesService {
  unreadCount = 0;
  private hubConnection: signalR.HubConnection

  public startConnection = (userName: string): Promise<any> => {//TODO
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/unread-messages')
      .build();

    return this.hubConnection
      .start()
      .then(() => console.log('Connection started')).then(() =>
        this.hubConnection.invoke("RegisterUserConnection", userName)
          .then(() => {
            console.log("registered connection for " + userName);
            this.monitorChange();
          }))
      .catch(err => console.log('Error while starting connection: ', err))
  }

  stopConnection(): Promise<any> {
    return this.hubConnection.invoke("RemoveUserConnection")
      .then(() => console.log("connection closed"))
      .catch(console.log);
  }

  monitorChange() {
    this.hubConnection.on('updateUnrCount', (unreadCount: number) => {
      console.log("obnovqvame", unreadCount);
      this.unreadCount = unreadCount
    });
  }

  updateUserUnreadCount = (userName: string) => {
    debugger;
    this.hubConnection.invoke('UpdateUserUnreadCount', userName).catch(console.log)
  }
}
