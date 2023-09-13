import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirNotasComponent } from './excluir-notas.component';

describe('ExcluirNotasComponent', () => {
  let component: ExcluirNotasComponent;
  let fixture: ComponentFixture<ExcluirNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirNotasComponent]
    });
    fixture = TestBed.createComponent(ExcluirNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
