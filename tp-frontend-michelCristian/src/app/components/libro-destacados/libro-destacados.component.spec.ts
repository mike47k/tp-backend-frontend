import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDestacadosComponent } from './libro-destacados.component';

describe('LibroDestacadosComponent', () => {
  let component: LibroDestacadosComponent;
  let fixture: ComponentFixture<LibroDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroDestacadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
