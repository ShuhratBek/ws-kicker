import { Component } from '@angular/core';

@Component({
  selector: 'tool-bar',
  template: `
  <md-toolbar color="primary">
      <h4>ng2Tetris</h4>
      <span class="fill-space"></span>
      <a routerLink="tetris" routerLinkActive="active">Tetris</a>
      <a routerLink="qr"  routerLinkActive="active">QR</a>
  </md-toolbar>`,
  styles: [
    '.fill-space {flex: 1 1 auto;}',
    '[md-fab] {position: absolute; right: 3%; top: 34px; z-index: 1;}',
    '.score {margin-right: 100px;}'
  ]
})
export class ToolBarComponent {}
