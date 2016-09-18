import {Component, Input} from '@angular/core';
import {ApiService } from '../api.service';

@Component({
    selector: 'response',
    template: require('./response.component.html')
})

export class ResponseComponent {
    @Input() messages: any[] = [];

    constructor(private apiService: ApiService) {
        // apiService.messages.subscribe(msg => {
        //     this.messages.push(msg);
        // });
    }

    clear() {
        this.messages = [];
    }
}
