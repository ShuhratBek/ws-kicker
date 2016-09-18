import {Component} from '@angular/core';
// import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';
import {ApiService } from './api.service';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {
    url: string = 'ws://echo.websocket.org';
    private messages: any[] = [];
    constructor(public apiService: ApiService, public wsService: WebSocketService) {
        // this.ws = new $WebSocket(this.url);
        // this.ws.onMessage((event: any) => {
        //     console.log(event);
        // }, null);
        // this.ws.onError((event: any) => {
        //     console.log('connection Error', event);
        // });
        //
        // this.ws.onClose((event: any) => {
        //     // this.ws.reconnect();
        //     console.log('connection closed', event);
        // });
        //
        // this.ws.onOpen(() => {
        //     console.log('connection open');
        // });
        // this.ws.send(event);
        // this.getDataStream = this.ws.getDataStream();
        this.apiService.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }

    connect() {
        this.apiService.messages.unsubscribe();
        this.apiService.newConnect(this.url);
        this.apiService.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }
}
