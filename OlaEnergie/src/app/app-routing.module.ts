import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { TableauComponent } from './tableau/tableau.component';


const routes: Routes = [
  {path: 'ajout' , component : AjoutComponent},
  {path: 'tableau' , component : TableauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
