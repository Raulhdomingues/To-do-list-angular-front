import { Component, DoCheck } from '@angular/core';
import { ToDoService } from '../../../service/to-do.service';

@Component({
  selector: 'app-container-tarefa-status',
  templateUrl: './container-tarefa-status.component.html',
  styleUrl: './container-tarefa-status.component.scss'
})
export class ContainerTarefaStatusComponent implements DoCheck{
  
  constructor(private toDoService: ToDoService) { }

  numeroDeTarefas: number = 0;
  tarefasConcluidas: number = 0;

  atualizarStatusTarefas() {
    this.numeroDeTarefas = this.toDoService.listaDeTarefas.length;
    this.tarefasConcluidas = this.toDoService.listaDeTarefas.filter(tarefa => tarefa.concluido == true).length;
  }

  ngDoCheck(): void {
    this.atualizarStatusTarefas();
  }
}
