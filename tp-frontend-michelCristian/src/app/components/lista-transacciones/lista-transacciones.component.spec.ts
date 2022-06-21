import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransaccionesComponent } from './lista-transacciones.component';

describe('ListaTransaccionesComponent', () => {
  let component: ListaTransaccionesComponent;
  let fixture: ComponentFixture<ListaTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
