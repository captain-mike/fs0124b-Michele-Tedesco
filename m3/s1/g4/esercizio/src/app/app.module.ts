import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AttiviComponent } from './Pages/attivi/attivi.component';
import { InattiviComponent } from './Pages/inattivi/inattivi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttiviComponent,
    InattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
