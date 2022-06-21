import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiLibroService } from 'src/app/services/api-libro.service';

@Component({
  selector: 'app-libro-destacados',
  templateUrl: './libro-destacados.component.html',
  styleUrls: ['./libro-destacados.component.css'],
})
export class LibroDestacadosComponent implements OnInit {
  libros: Libro[] = [];
  i: number = 0;
  libro: Libro = new Libro();

  constructor(private service: ApiLibroService) {
    this.iniciar();
  }

  iniciar() {
    this.service.obtenerLibrosDestacados().subscribe((data: any) => {
      this.libros = data;
      console.log(data);
      console.log(this.libros);
      this.libro = this.libros[0];
    });
    console.log(this.libro);
  }

  siguiente() {
    if (this.i != this.libros.length - 1) {
      this.i = this.i + 1;
      this.libro = this.libros[this.i];
    }
  }

  anterior() {
    if (this.i != 0) {
      this.i = this.i - 1;
      this.libro = this.libros[this.i];
    }
  }

  ngOnInit(): void {}
}
