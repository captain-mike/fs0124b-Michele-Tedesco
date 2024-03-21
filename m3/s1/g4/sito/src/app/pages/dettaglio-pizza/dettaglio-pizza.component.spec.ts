import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPizzaComponent } from './dettaglio-pizza.component';

describe('DettaglioPizzaComponent', () => {
  let component: DettaglioPizzaComponent;
  let fixture: ComponentFixture<DettaglioPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettaglioPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettaglioPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
