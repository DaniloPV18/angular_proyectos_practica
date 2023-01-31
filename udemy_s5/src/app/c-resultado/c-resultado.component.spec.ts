import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CResultadoComponent } from './c-resultado.component';

describe('CResultadoComponent', () => {
  let component: CResultadoComponent;
  let fixture: ComponentFixture<CResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
