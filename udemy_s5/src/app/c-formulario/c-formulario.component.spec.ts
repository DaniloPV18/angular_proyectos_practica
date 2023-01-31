import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFormularioComponent } from './c-formulario.component';

describe('CFormularioComponent', () => {
  let component: CFormularioComponent;
  let fixture: ComponentFixture<CFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
