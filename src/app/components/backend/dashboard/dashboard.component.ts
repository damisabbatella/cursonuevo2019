import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from 'src/app/services/backend/profesores.service';
import { Cursos } from 'src/app/interfaces/cursos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private profesores:ProfesoresService) { }
listadocursos:Cursos[];
  ngOnInit() {
this.profesores.listados().snapshotChanges().subscribe(data =>{
this.listadocursos=[];
data.map(element=>{
let x=element.payload.toJSON();
this.listadocursos.push(x as Cursos);



})





})

  }

}
