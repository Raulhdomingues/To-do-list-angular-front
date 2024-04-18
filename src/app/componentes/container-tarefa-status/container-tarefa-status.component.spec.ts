import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTarefaStatusComponent } from './container-tarefa-status.component';

describe('ContainerTarefaStatusComponent', () => {
  let component: ContainerTarefaStatusComponent;
  let fixture: ComponentFixture<ContainerTarefaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerTarefaStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerTarefaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
