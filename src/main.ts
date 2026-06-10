import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
=======
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
<<<<<<< HEAD

registerLocaleData(localePt);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
=======
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
>>>>>>> c4a2bc986eb4b703b4d38543ccee62873358d50d
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
