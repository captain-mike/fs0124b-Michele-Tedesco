import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AttiviComponent } from './Pages/attivi/attivi.component';
import { InattiviComponent } from './Pages/inattivi/inattivi.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'attivi',
    component: AttiviComponent
  },
  {
    path: 'inattivi',
    component: InattiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
