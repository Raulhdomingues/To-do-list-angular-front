import { Component, Injectable, OnInit} from '@angular/core';
import { ToDoService } from '../../../service/to-do.service';
import { Tarefa } from '../../models/tarefa-model';
import { Subscription } from 'rxjs';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{

  listaDeTarefas: Tarefa[] = [];
  subscription = new Subscription();
  styleConcluido = false;
  
  constructor(
    private toDoService: ToDoService,
  ) {
      this.subscription = 
      this.toDoService.recebeAtualizacao().subscribe(() => {
        this.listaDeTarefas = [];
        this.listaDeTarefas = this.toDoService.obterTarefas();
      })
    }

  ngOnInit(): void {
    this.listaDeTarefas = this.toDoService.obterTarefas()
    this.toDoService.listarTarefas();
    console.log(this.listaDeTarefas)
  }
  
  iconeLixeira = faTrash
  removerTarefa(index: number) {
    this.toDoService.removerTarefa(index)
  }

  concluirTarefa(index: number) {
    this.toDoService.concluirTarefa(index)
    
    const itemConcluido = this.toDoService.listaDeTarefas[index].concluido
    console.log(itemConcluido);
  }
};




