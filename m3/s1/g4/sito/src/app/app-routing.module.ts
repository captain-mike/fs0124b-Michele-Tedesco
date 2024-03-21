import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { DettaglioPizzaComponent } from './pages/dettaglio-pizza/dettaglio-pizza.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path:'pizze/:id',
    component: DettaglioPizzaComponent
  },
  {
    path:'contatti',
    component: ContattiComponent
  },
  {
    path:'**',
    component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
