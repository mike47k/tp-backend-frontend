import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPasajeComponent } from './crear-pasaje.component';

describe('CrearPasajeComponent', () => {
  let component: CrearPasajeComponent;
  let fixture: ComponentFixture<CrearPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPasajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
