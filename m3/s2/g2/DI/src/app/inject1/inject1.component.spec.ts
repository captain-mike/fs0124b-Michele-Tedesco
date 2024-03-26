import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inject1Component } from './inject1.component';

describe('Inject1Component', () => {
  let component: Inject1Component;
  let fixture: ComponentFixture<Inject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inject1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
