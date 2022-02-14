import { NgModule } from "@angular/core";
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';

import { PublicComponent } from './public.component';
import { SorteoComponent } from './sorteo/components/sorteo.component';


import { PublicService } from './public.service';

@NgModule({
imports:[
    PublicRoutingModule,
    SharedModule
],
declarations:[
    PublicComponent,
    SorteoComponent,

           
],
exports:[],
providers:[PublicService]


})

export class PublicModule{


constructor(){}

}