import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CFormularioComponent } from './c-formulario/c-formulario.component';
import { CResultadoComponent } from './c-resultado/c-resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CFormularioComponent,
    CResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
