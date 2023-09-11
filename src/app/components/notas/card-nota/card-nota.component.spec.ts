import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotaComponent } from './card-nota.component';

describe('CardNotaComponent', () => {
  let component: CardNotaComponent;
  let fixture: ComponentFixture<CardNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNotaComponent]
    });
    fixture = TestBed.createComponent(CardNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
