import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasajesComponent } from './lista-pasajes.component';

describe('ListaPasajesComponent', () => {
  let component: ListaPasajesComponent;
  let fixture: ComponentFixture<ListaPasajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPasajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPasajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
