import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy_s5';
  resultado!:number;

  resultadoSuma(_n:number){
    this.resultado = _n;
  }
}
