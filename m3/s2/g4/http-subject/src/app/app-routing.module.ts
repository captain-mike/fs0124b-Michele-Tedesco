import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { NewPizzaComponent } from './pages/new-pizza/new-pizza.component';
import { EditPizzaComponent } from './pages/edit-pizza/edit-pizza.component';

const routes: Routes = [
  {
    path:'',
    component: ListaComponent
  },
  {
    path:'add',
    component: NewPizzaComponent
  },
  {
    path:'edit/:id',
    component: EditPizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
