import { NgModule } from '@angular/core';

// import { QRCodeComponent } from 'ng2-qrcode';
import { QrComponent } from './qr.component';
import { routing } from './qr.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    // QRCodeComponent,
    QrComponent
  ]
})
export class QRModule {}
