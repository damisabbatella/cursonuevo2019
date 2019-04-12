import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import{Profesores} from '../../interfaces/profesores';
import { from } from 'rxjs';
import { Cursos } from 'src/app/interfaces/cursos';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  listadoscurso: AngularFireList<Cursos>

  constructor(private fireBase: AngularFireDatabase) { 

    

  }
  listados() {
    return this.listadoscurso = this.fireBase.list('curso');
  }
  nuevocurso(obj :Cursos) {
    this.listadoscurso.push({
      usuario:obj.usuario,
      nombre:obj.nombre,
      clave:obj.clave,
      tema:obj.tema,
      examen:obj.examen,

     
    });
  }

  UpdateChat(obj) {
    this.listChat.update(obj.$key, {
      Responsable1: obj.Responsable1,
      Responsable2: obj.Responsable2,
      Responsable1Foto: obj.Responsable1Foto,
      Responsable2Foto: obj.Responsable2Foto,
      mensajes: obj.mensajes
    }); 
  }

}
