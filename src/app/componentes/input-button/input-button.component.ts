import { ToDoService } from './../../../service/to-do.service';
import { Component, Inject, Injectable } from '@angular/core';
import { Tarefa } from '../../models/tarefa-model';
import { ContainerTarefaStatusComponent } from '../container-tarefa-status/container-tarefa-status.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrl: './input-button.component.scss'
})
export class InputButtonComponent {

  constructor (
    private toDoService: ToDoService,
    private containerTarefaStatus: ContainerTarefaStatusComponent
    ) { }

  tarefaDigitada: string = '';

  adicionarTarefa() {
    this.containerTarefaStatus.atualizarNumeroDeTarefas();
    const novaTarefa: Tarefa = {
      tarefa: this.tarefaDigitada,
      concluido: false
    };
    this.toDoService.adicionarTarefa(novaTarefa);
    this.tarefaDigitada = '';
  }
}
