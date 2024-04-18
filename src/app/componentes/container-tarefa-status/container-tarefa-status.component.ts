import { Component, DoCheck, Injectable, OnInit } from '@angular/core';
import { ToDoService } from '../../../service/to-do.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-container-tarefa-status',
  templateUrl: './container-tarefa-status.component.html',
  styleUrl: './container-tarefa-status.component.scss'
})
export class ContainerTarefaStatusComponent {

  constructor(private toDoService: ToDoService) {}
  
  numeroDeTarefas = 0;
  tarefasConcluidas = 0;
  
  atualizarNumeroDeTarefas() {
    this.numeroDeTarefas = this.toDoService.listaDeTarefas.length;
    this.tarefasConcluidas = this.toDoService.listaDeTarefas.filter(tarefa => tarefa.concluido == true).length;
  }

  teste() {
    console.log(this.toDoService.listaDeTarefas);
  }
}
