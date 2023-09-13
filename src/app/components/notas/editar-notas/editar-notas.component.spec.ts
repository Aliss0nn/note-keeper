import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotasComponent } from './editar-notas.component';

describe('EditarNotasComponent', () => {
  let component: EditarNotasComponent;
  let fixture: ComponentFixture<EditarNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarNotasComponent]
    });
    fixture = TestBed.createComponent(EditarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
