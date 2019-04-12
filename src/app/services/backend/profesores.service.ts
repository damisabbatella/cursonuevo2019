import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import{Profesores} from '../../interfaces/profesores';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  listados: AngularFireList<any>

  constructor(private fireBase: AngularFireDatabase) { 

    

  }
  listados() {
    return this.listados = this.fireBase.list('usuario');
  }
  nuevoChat(obj :Profesores) {
    this.listChat.push({
      Responsable1: obj.Responsable1,
      Responsable1Foto: obj.Responsable1Foto,
      Responsable2Foto: obj.Responsable2Foto,
      Responsable2: obj.Responsable2,
      mensajes: [{ mensaje: obj.mensaje, quien: obj.quien, para: obj.para, visto: obj.visto, }]
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
