import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  personas:Persona[] = [new Persona('Danilo', 'Pin'), new Persona('Laura','Suarez')];
  
  personaAgregada(p:Persona){
    this.personas.push(p);
  }
}
