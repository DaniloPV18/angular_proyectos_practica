import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-resultado',
  templateUrl: './c-resultado.component.html',
  styleUrls: ['./c-resultado.component.css']
})
export class CResultadoComponent {
  @Input() result!:number;
}
