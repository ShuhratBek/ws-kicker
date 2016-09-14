/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './index.scss';
// The app module
import { AppModule } from './app/app.module';

import {enableProdMode} from '@angular/core';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
