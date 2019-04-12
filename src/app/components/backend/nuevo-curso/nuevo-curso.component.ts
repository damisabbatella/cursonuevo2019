import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/interfaces/tema';
import { Cursos } from 'src/app/interfaces/cursos';
import { ProfesoresService } from 'src/app/services/backend/profesores.service';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  newTema : boolean; //Mostrar listado o no mostrar.
  TemaAdd : Tema; //Objeto para los Input.
  Temas : Tema[]; //Array para subir a firebase.
curso:Cursos;

  constructor(private service:ProfesoresService) {
    this.newTema = false;
    this.Temas = [];
    this.TemaAdd = null;
    this.curso=null;
  }

  ngOnInit() {
    //Objeto vacio para llenar con los Inputs
    this.TemaAdd = {
      nombre:null,
      descripcion:null,
      propuesta:null,
      whatsapp:null
    };
    this.curso= {
      usuario:null,
      nombre:null,
      clave:null,
      tema:null,
      examen:null,




    }
    this.service.listados();
  }

  addTema(){
    this.Temas.push(this.TemaAdd);
  }
  addCurso(){
  this.curso.examen="hola";
  this.curso.usuario="pepe";
  this.curso.tema=this.Temas;
  this.service.nuevocurso(this.curso);
  }
}
