import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './pages/lista/lista.component';
import { NewPizzaComponent } from './pages/new-pizza/new-pizza.component';
import { EditPizzaComponent } from './pages/edit-pizza/edit-pizza.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClassInterceptor } from './http-class.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NewPizzaComponent,
    EditPizzaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpClassInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
