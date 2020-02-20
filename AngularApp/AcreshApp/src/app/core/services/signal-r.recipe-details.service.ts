
import * as signalR from "@aspnet/signalr";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class SignalRRecipeDetailsService {
    unreadCount = 0;
    private hubConnection: signalR.HubConnection

    private recipeMonitored: { id: string } = null;
    public startConnection = (rec: { id: string }): Promise<any> => {//TODO
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:5001/recipe-details')
            .build();

        return this.hubConnection
            .start()
            .then(() => console.log('Connection started')).then(() =>
                this.hubConnection.invoke("RegisterUserConnection", rec.id))
            .then(() => {
                console.log("registered connection for details monitoring");
                this.recipeMonitored = rec;
                this.StartListening();
            })
            .catch(err => console.log('Error while starting connection: ', err))
    }

    stopConnection(): Promise<any> {
        return this.hubConnection.invoke("RemoveUserConnection")
            .then(() => console.log("connection closed"))
            .catch(console.log);
    }

    patchRecipeData(newFragment: {}): Promise<any> {
        return this.hubConnection.invoke("ChangeDetailsProp", this.recipeMonitored.id, newFragment);
    }

    StartListening() {
        this.hubConnection.on("updateFavs", (newPatch: {}) => {
            console.log("haber za nov pochitatel!", newPatch);
            Object.entries(newPatch).forEach(([key, value]) => {
                this.recipeMonitored[key] = value;
            })
        })
    }
}
