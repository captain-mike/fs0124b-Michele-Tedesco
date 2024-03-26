import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticaComponent } from './pratica.component';

describe('PraticaComponent', () => {
  let component: PraticaComponent;
  let fixture: ComponentFixture<PraticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PraticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
