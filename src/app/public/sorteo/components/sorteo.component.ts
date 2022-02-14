import { Component,OnInit } from '@angular/core';
import { Bola } from '../../../core/models/bolas';







@Component({
  selector: 'app-user',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent implements OnInit {


primerSorteoBolas: Bola[] = [];

constructor( ){}
ngOnInit() {

    
}



sortear( ){
this.primerSorteoBolas = []
var Numerobolas = aleatorios(3,4)

// for (let i = 0; i < Numerobolas.length; i++) {
// var bolas = {numero:Numerobolas[i],color:'primary'}
// this.primerSorteoBolas.push(bolas);


 
// }



this.primerSorteoBolas = Numerobolas.map(function (task, index, array) {
 
  var bolas = {numero:task,color:'primary',bolas:[Number]}
if(bolas.numero ===1){

  bolas.bolas= aleatorios(2,18)
}

if(bolas.numero ===2){

  bolas.bolas= aleatorios(2,22)
}

if(bolas.numero ===3){

  bolas.bolas= aleatorios(2,21)
}


if(bolas.numero ===4){

  bolas.bolas= aleatorios(2,18)
}
  return bolas

});



}
 



}
    
    
function aleatorios( numeros:number , limite:number) {


  const n = limite;
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
      arr[i] = i + 1;
  }
  
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);
  const loteria = arr.slice(0, numeros);

  return loteria

}  




 