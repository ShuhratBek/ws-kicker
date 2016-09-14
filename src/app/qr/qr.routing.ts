import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrComponent }    from './qr.component';

const routes: Routes = [
  // { path: '', redirectTo: 'qr', pathMatch: 'full'},
  { path: 'qr', component: QrComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
