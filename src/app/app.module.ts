import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {ResponseComponent} from './home/response/response.component';
import {RequestComponent} from './home/request/request.component';
import {WebSocketService } from './home/websocket.service';
import {ApiService } from './home/api.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RequestComponent,
        ResponseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders, WebSocketService, ApiService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
