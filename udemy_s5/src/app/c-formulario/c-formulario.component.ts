import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-formulario',
  templateUrl: './c-formulario.component.html',
  styleUrls: ['./c-formulario.component.css']
})
export class CFormularioComponent {
  @Output() resultadoSalida = new EventEmitter<number>();

  num1:string = "";
  num2:string = "";

  sumar(){
    this.resultadoSalida.emit((parseInt(this.num1) + parseInt(this.num2)));
  }
}
