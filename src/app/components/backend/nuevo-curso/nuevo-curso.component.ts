import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/interfaces/tema';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  newTema : boolean; //Mostrar listado o no mostrar.
  TemaAdd : Tema; //Objeto para los Input.
  Temas : Tema[]; //Array para subir a firebase.

  constructor() {
    this.newTema = false;
    this.Temas = [];
    this.TemaAdd = null;
  }

  ngOnInit() {
    //Objeto vacio para llenar con los Inputs
    this.TemaAdd = {
      nombre:null,
      descripcion:null,
      propuesta:null,
      whatsapp:null
    };
  }

  addTema(){
    this.Temas.push(this.TemaAdd);
  }
}
