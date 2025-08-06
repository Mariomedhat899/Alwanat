import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,RouterLink } from '@angular/router';
 import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
 import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, 'Assets/i18n/', '.json');
 }
 
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),importProvidersFrom(
    TranslateModule.forRoot({
     loader: {
           provide: TranslateLoader,
           useFactory: HttpLoaderFactory,
           deps: [HttpClient]
         }
         
    }),
  BrowserAnimationsModule)]
};
