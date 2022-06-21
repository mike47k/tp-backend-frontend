import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiLibroService } from 'src/app/services/api-libro.service';

@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css'],
})
export class CrearLibrosComponent implements OnInit {
  libro: Libro = new Libro();
  constructor(private service: ApiLibroService) {}

  ngOnInit(): void {}

  guardarLibro() {
    console.log(this.libro);
    this.service.crearLibro(this.libro).subscribe((data) => {
      console.log(data);
      alert('Libro Creado');
    });
  }
}
