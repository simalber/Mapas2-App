import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoicHNpbWFycm83IiwiYSI6ImNreWluY3I5YjF4NTUydnFoN2U4cTd1MjcifQ.f9g-9fuJpgqnzKqLsoRKdw';

if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
