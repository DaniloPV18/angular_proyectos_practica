import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperandoComponent } from './operando.component';

describe('OperandoComponent', () => {
  let component: OperandoComponent;
  let fixture: ComponentFixture<OperandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
