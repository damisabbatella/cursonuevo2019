import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../components/frontend/login/login.component';
import { DashboardComponent } from '../components/backend/dashboard/dashboard.component';
import { NuevoCursoComponent } from '../components/backend/nuevo-curso/nuevo-curso.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: LoginComponent  },
  { path: 'dashboard/inicio', component: DashboardComponent  },
  { path: 'dashboard/nuevo-curso', component: NuevoCursoComponent  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}