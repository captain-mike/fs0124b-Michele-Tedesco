import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti.component';

//ogni path comincia con la path del modulo in cui ci troviamo
const routes: Routes = [
  { path: '', component: ContattiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContattiRoutingModule { }
