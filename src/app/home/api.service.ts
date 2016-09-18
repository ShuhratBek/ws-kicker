import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';

@Injectable()
export class ApiService {
    public messages: Subject<any>;
    url: string = 'ws://echo.websocket.org';
    constructor(public wsService: WebSocketService) {
        this.messages = <Subject<any>>wsService
            .connect(this.url)
            .map((response: MessageEvent): any => {
                let data = JSON.parse(response.data);
                return data;
            });
        console.log(wsService);
    }

    newConnect(url: string) {
        this.messages = <Subject<any>>this.wsService
            .newConnect(url)
            .map((response: MessageEvent): any => {
                let data = JSON.parse(response.data);
                return data;
            });
    }
} // end class ApiService
