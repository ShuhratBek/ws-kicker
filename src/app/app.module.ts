import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar';

/* Feature Modules */
import { routing } from './app.routing';
import { QRModule } from './qr';
import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';

@NgModule({
  imports:      [
    BrowserModule,
    routing,
    MdCoreModule.forRoot(),
    MdCardModule.forRoot(),
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    QRModule
  ],
  declarations: [
    AppComponent,
    ToolBarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
