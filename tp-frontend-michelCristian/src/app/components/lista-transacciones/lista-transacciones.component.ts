import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-lista-transacciones',
  templateUrl: './lista-transacciones.component.html',
  styleUrls: ['./lista-transacciones.component.css'],
})
export class ListaTransaccionesComponent implements OnInit {
  transacciones: Transaccion[] = [];
  de: string = '';
  a: string = '';
  list!: string[];

  constructor(private service: CurrencyService) {
    this.iniciar();
    this.getLists();
  }
  getLists() {
    this.service.listOfCurrency().subscribe((data: any) => {
      this.list = data;
    });
  }
  iniciar() {
    this.service.listTransacciones().subscribe((q: any) => {
      this.transacciones = q;
      console.log(q);
    });
  }
  filtro() {
    this.service.filtroTransacciones(this.de, this.a).subscribe((q: any) => {
      this.transacciones = q;
      console.log(q);
    });
  }

  ngOnInit(): void {}
}
