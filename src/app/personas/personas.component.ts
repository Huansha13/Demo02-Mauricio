import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  @Output() eviarDatos = new EventEmitter<any>();
  @Output() eviarDatosUpdate = new EventEmitter<any>();
  @Input() recibirDatos: any;

  nombrePersona: string = "";
  edadPersona: number = 0;
  sexo: string = "";
  listaData: any[] = [];
  txtMensaje: string;
  indexPersona: number;

  constructor() { }

  ngOnInit(): void {
    this.loadListaPersonas();
  }


  loadListaPersonas() {
  }

  guardarInformacion() {
    this.txtMensaje = "";
    if(this.nombrePersona != "" && this.sexo != "" && this.edadPersona > 0) {

      this.eviarDatos.emit(this.loadRequest(),);
      this.clearInput();
    } else {
      this.txtMensaje = "Campos vacios"
    }

  }


  clearInput() {
    this.nombrePersona = "";
    this.edadPersona = 0;
    this.sexo = "";
  }

  setDato(data: any) {
    this.listaData = data;
  }

  getDatos() {

    return this.loadRequest();
  }

  setPersonaEditarr(persona: any, index: any) {
    console.log(persona);

    this.nombrePersona = persona.nombre;
    this.edadPersona = persona.edad ;
    this.sexo = persona.sexo;
    this.indexPersona = index;
  }

  actualizarInformacion() {
    const requestUpdate = {
      datosModificados: this.loadRequest(),
      index: this.indexPersona
    }

     this.eviarDatosUpdate.emit(requestUpdate);
     this.clearInput();
  }


  loadRequest() {
    const request = {
      nombre: this.nombrePersona,
      edad: this.edadPersona,
      sexo: this.sexo
    }

    return request;
  }
}
