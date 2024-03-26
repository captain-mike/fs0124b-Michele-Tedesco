import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Inject1Component } from './inject1/inject1.component';
import { Inject2Component } from './inject2/inject2.component';

@NgModule({
  declarations: [
    AppComponent,
    Inject1Component,
    Inject2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
