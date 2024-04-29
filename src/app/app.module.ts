import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InputButtonComponent } from './componentes/input-button/input-button.component';
import { ContainerTarefaStatusComponent } from './componentes/container-tarefa-status/container-tarefa-status.component';
import { ListaVaziaComponent } from './componentes/lista-vazia/lista-vazia.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { ToDoService } from './service/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputButtonComponent,
    ContainerTarefaStatusComponent,
    ListaVaziaComponent,
    ListaComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
