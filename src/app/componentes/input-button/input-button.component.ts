import { ToDoService } from './../../../service/to-do.service';
import { Component, Injectable } from '@angular/core';
import { Tarefa } from '../../models/tarefa-model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrl: './input-button.component.scss'
})
export class InputButtonComponent {

  constructor (private toDoService: ToDoService) { }

  tarefaDigitada: string = '';

  adicionarTarefa() {
    const novaTarefa: Tarefa = {
      id: '',
      tarefa: this.tarefaDigitada,
      concluido: false
    };
    this.toDoService.adicionarTarefa(novaTarefa);
    this.tarefaDigitada = '';
  }
}
