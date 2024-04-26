import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ContainerTarefaStatusComponent } from './componentes/container-tarefa-status/container-tarefa-status.component';

const routes: Routes = [
  { 
    path: '', 
    component: ContainerTarefaStatusComponent
  },
  { path: 'login',
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
