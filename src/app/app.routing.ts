import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: 'app/qr/qr.module#QRModule'},
  { path: 'qr', loadChildren: 'app/qr/qr.module#QRModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
