import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolazioneComponent } from './interpolazione/interpolazione.component';
import { AttributiComponent } from './attributi/attributi.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolazioneComponent,
    AttributiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
