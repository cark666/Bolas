import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from "@angular/common/http";



import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
imports:[
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatChipsModule,
],
declarations:[
    NotFoundComponent
],
exports:[
    HttpClientModule,
    RouterModule,
    MatChipsModule,
    NotFoundComponent,
    CommonModule,
 
],
providers:[]


})

export class SharedModule{


constructor(){}

}