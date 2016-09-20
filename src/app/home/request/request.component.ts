import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'request',
    template: require('./request.component.html')
})

export class RequestComponent {
    private request: string;
    private clear: boolean = true;

    constructor(private apiService: ApiService) {

    }

    send() {
        this.apiService.messages.next(this.request);
        if(this.clear) {
            this.request = '';
        }
    }
}
