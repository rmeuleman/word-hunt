import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Grid } from './app/word-hunt/grid';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));