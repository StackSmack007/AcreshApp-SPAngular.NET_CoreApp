
import * as signalR from "@aspnet/signalr";
import { Injectable } from '@angular/core';
import { IComment } from '../interfaces/comments/IComment';
import { ICommentLikeStatus } from '../interfaces/comments/ILikesCommentStatus';
import { ICommentContentStatus } from '../interfaces/comments/ICommentContentStatus';

@Injectable({ providedIn: "root" })
export class SignalRRecipeDetailsService {
    unreadCount = 0;
    private hubConnection: signalR.HubConnection

    private recipeMonitored: { id: string } = null;
    private commentsMonitored: IComment[] = null;
    public startConnection = (rec: { id: string }): Promise<any> => {//TODO
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:5001/recipe-details')
            .build();

        return this.hubConnection
            .start()
            .then(() => console.log('Connection started')).then(() =>
                this.hubConnection.invoke("RegisterUserConnection", rec.id))
            .then(() => {
                console.log("registered connection for details monitoring...");
                this.recipeMonitored = rec;
                this.startListening();
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

    private startListening() {
        this.hubConnection.on("updateRecipeData", (newPatch: {}) => {
            //   console.log("Recieved details update...", newPatch);
            Object.entries(newPatch).forEach(([key, value]) => {
                this.recipeMonitored[key] = value;
            })
        })
    }

    private enqueueComment(comment: IComment) { this.commentsMonitored.unshift(comment) }

    private deleteCommentById(id: number) {
        const commentIndex = this.commentsMonitored.findIndex(x => x.id === id);
        if (commentIndex === -1) return;
        this.commentsMonitored.splice(commentIndex, 1);
    }

    private setCommentVotes(stat: ICommentLikeStatus) {
        let commentFd = this.commentsMonitored.find(x => x.id === stat.id);
        if (!commentFd) return; //this comment is not yet displayed so no need of updating.
        commentFd.likers = stat.likers;
        commentFd.disLikers = stat.disLikers;
    }

    private setCommentContent(stat: ICommentContentStatus) {
        let commentFd = this.commentsMonitored.find(x => x.id === stat.id);
        if (!commentFd) return; //this comment is not yet displayed so no need of updating.
        commentFd.dateModified = stat.dateModified;
        commentFd.content = stat.content;
    }

    monitorComments(comments: IComment[]) {
        console.log("registered set of comments for monitoring...");
        this.commentsMonitored = comments;
        this.hubConnection.on("addNewComment", (comment: IComment) => {
            //  console.log("recieved new comment...");
            this.enqueueComment(comment);
        });
        this.hubConnection.on("deleteComment", (id: number) => {
            //  console.log("recieved new comment...");
            this.deleteCommentById(id);
        });

        this.hubConnection.on("updateCommentVotes", (st: ICommentLikeStatus) => {
            //  console.log("someone voted for comment...");
            this.setCommentVotes(st);
        });
        
        this.hubConnection.on("updateCommentContent", (st: ICommentContentStatus) => {
            //  console.log("someone voted for comment...");
            this.setCommentContent(st);
        });
    }

    addComment(newCommentForDisplay: IComment) {
        this.enqueueComment(newCommentForDisplay);
        this.hubConnection.invoke("AddComment", this.recipeMonitored.id, newCommentForDisplay);
    }

    removeComment(id: number) {
        this.deleteCommentById(id);
        this.hubConnection.invoke("DeleteComment", this.recipeMonitored.id, id);
    }

    changeCommentVote(status: ICommentLikeStatus) {
        this.setCommentVotes(status);
        this.hubConnection.invoke("ChangeCommentVote", this.recipeMonitored.id, status)
    }

    changeCommentContent(status: import("../interfaces/comments/ICommentContentStatus").ICommentContentStatus) {
        this.setCommentContent(status);
        this.hubConnection.invoke("ChangeCommentContent", this.recipeMonitored.id, status)
    }
}
