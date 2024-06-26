import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ContainerTarefaStatusComponent } from './componentes/container-tarefa-status/container-tarefa-status.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { 
    path: '', 
    component: ContainerTarefaStatusComponent
  },
  { path: 'login',
    component: LoginComponent 
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
