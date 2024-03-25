import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './teoria/input/input.component';
import { OutputComponent } from './teoria/output/output.component';
import { PraticaComponent } from './pratica/pratica.component';
import { FormComponent } from './pratica/form/form.component';
import { ItemComponent } from './pratica/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    PraticaComponent,
    FormComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
