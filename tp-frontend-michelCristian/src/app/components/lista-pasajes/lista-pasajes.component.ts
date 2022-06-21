import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajesService } from 'src/app/services/pasajes.service';

@Component({
  selector: 'app-lista-pasajes',
  templateUrl: './lista-pasajes.component.html',
  styleUrls: ['./lista-pasajes.component.css'],
})
export class ListaPasajesComponent implements OnInit {
  pasajes: Pasaje[] = [];
  cat: string = '';
  constructor(private service: PasajesService, private router: Router) {
    this.iniciar();
  }

  iniciar() {
    this.service.getPasajes().subscribe((q: any) => {
      this.pasajes = q;
      console.log(q);
    });
  }
  obtenerPorCategoria() {
    this.service.getPasajeCategoria(this.cat).subscribe((q: any) => {
      this.pasajes = q;
      console.log(q);
    });
  }
  eliminarPasaje(id: string) {
    this.service.borrarPasaje(id).subscribe((q: any) => {
      console.log(q);
      this.iniciar();
    });
  }
  editar(id: string) {
    this.router.navigate(['paC', id]);
  }

  ngOnInit(): void {}
}
