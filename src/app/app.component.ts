import { Component, Input, ViewChild } from '@angular/core';
import { PersonasComponent } from './personas/personas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(PersonasComponent) personasComponent: PersonasComponent;
  title = 'demo02';
  listaPersonas: any[] = [
    {
      nombre: 'Juan',
      edad: 22,
      sexo: 'm'
    },
    {
      nombre: 'Maria',
      edad: 22,
      sexo: 'm'
    }
  ];


  datosPersona(request: any) {
    console.log(request);
    this.listaPersonas.push(request);
    this.eviarDatosAPersonaComponent();
  }

  eviarDatosAPersonaComponent() {
    this.personasComponent.setDato(this.listaPersonas);
    console.log("Padre:", this.personasComponent.getDatos());

  }

  eliminarItem(persona: any) {
    const index = this.listaPersonas.indexOf(persona);
    this.listaPersonas.splice(index, 1);
  }

  editar(persona: any) {
    const index = this.listaPersonas.indexOf(persona);
    this.personasComponent.setPersonaEditarr(persona, index);
  }

  actualizarDatos(persona: any) {
    this.listaPersonas[persona.index] = persona.datosModificados;
  }

}
