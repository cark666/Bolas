import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./public/public.module').then(m=>m.PublicModule)},
  {path:'**',component: NotFoundComponent}

];

@NgModule({
  //tecnica de hashing para el refresco de las paginas
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
