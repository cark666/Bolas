import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PublicComponent } from './public.component';
import { SorteoComponent } from './sorteo/components/sorteo.component';

const routes: Routes = [
  { path:'', component: PublicComponent, children:
  [
   { path:'', redirectTo:'sorteo', pathMatch:'full'},
   { path:'sorteo', component:SorteoComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
