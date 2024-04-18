import { Injectable } from '@angular/core';
import { Tarefa } from '../app/models/tarefa-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public listaDeTarefas: Tarefa[] = [];
  public tarefaDigitada: string = '';
  private subjectToDo = new Subject<void>();
  
  async adicionarTarefa (tarefa: Tarefa) {
    if(tarefa.tarefa !== '') {
      await fetch('http://localhost:3030/criar-tarefa', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(tarefa),
      })
      this.listaDeTarefas.push(tarefa);
      this.notificaAtualizacao();
    } else {
      alert('Digite uma tarefa!');
    }
  }

  async listarTarefas() {
    const response = await fetch('http://localhost:3030/listar-tarefas');
    const tarefas = await response.json();
    this.listaDeTarefas = tarefas;
    this.notificaAtualizacao();
  }

  concluirTarefa(index: number) {
    this.listaDeTarefas[index].concluido = !this.listaDeTarefas[index].concluido;
  }

  removerTarefa(index: number) {
    this.listaDeTarefas.splice(index, 1);
  }

  obterTarefas(): Tarefa[] {
    return this.listaDeTarefas;
  }

  private notificaAtualizacao() {
    return this.subjectToDo.next();
  }

  recebeAtualizacao() {
    return this.subjectToDo.asObservable();
  }
}

