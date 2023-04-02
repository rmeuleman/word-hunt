import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridConfigurationFormComponent } from './word-hunt/grid-configuration-form/grid-configuration-form.component';
import { WordLengthValidatorDirective } from './word-hunt/grid-configuration-form/word-length.directive';
import { GridViewComponent } from './word-hunt/grid-view/grid-view.component';
import { WordHuntModule } from './word-hunt/word-hunt.module';

@NgModule({
  declarations: [
    AppComponent,
    GridConfigurationFormComponent,
    GridViewComponent,
    WordLengthValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WordHuntModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
