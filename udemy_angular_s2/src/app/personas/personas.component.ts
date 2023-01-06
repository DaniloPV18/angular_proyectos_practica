import {Component} from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl:'./personas.component.html',
    //styleUrls: ['./personas.component.css']
    styles: [`
        h1{
            color:blue;
        }
    `]    
})

export class PersonasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = '';
    mostrar = false;
    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona se ha agregado'
    }

    modificarTitulo(event: Event){
        //CASTING PARA OBTENER UN VALOR DESDE LA PLANTILLA HTML
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}