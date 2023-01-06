import { Component } from '@angular/core';

@Component({
  selector: 'app-operando',
  templateUrl: './operando.component.html',
  styleUrls: ['./operando.component.css']
})
export class OperandoComponent {
  deshabilitar = false;
  num1 =  " ";
  num2 =  " ";
  resultado: number = 0;

  sumar(){
    console.log(parseInt(this.num1) + parseInt(this.num2));    
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }
}
