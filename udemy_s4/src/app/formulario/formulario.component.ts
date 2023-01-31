import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    this.personaCreada.emit(new Persona(this.nombreInput, this.apellidoInput));
    //this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
    alert('Se agregó persona nueva');
  }
}
