import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {
    private url: string;
    private messages: any[] = [];

    constructor(public apiService: ApiService) {
        this.url = this.apiService.url;
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
