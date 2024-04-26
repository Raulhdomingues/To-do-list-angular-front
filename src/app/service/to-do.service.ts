import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa-model';
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
      this.listarTarefas();
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

  async removerTarefa(_id: any) {
    await fetch(`http://localhost:3030/deletar-tarefa/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    this.listarTarefas();
  }

  async editarTarefa(_id: any) {
    await fetch(`http://localhost:3030/editar-tarefa/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        concluido: true
      })
    })
    this.listarTarefas();
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
