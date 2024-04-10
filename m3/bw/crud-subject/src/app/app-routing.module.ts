import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users/list/list.component';
import { EditComponent } from './pages/users/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component: UsersListComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
