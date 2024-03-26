import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inject2Component } from './inject2.component';

describe('Inject2Component', () => {
  let component: Inject2Component;
  let fixture: ComponentFixture<Inject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inject2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
