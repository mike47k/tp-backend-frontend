import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
})
export class TransaccionesComponent implements OnInit {
  q!: number;
  from!: string;
  to!: string;
  list!: string[];
  result!: string;
  transaccion: Transaccion = new Transaccion();

  constructor(private service: CurrencyService) {
    this.getLists();
  }

  getLists() {
    this.service.listOfCurrency().subscribe((data: any) => {
      this.list = data;
    });
  }
  //la api funciona mal pero es la unica q encontre que me deja hacer muchas peticiones
  convertir() {
    this.service
      .exchange(
        this.transaccion.cantidadOrigen,
        this.transaccion.monedaOrigen,
        this.transaccion.monedaDestino
      )
      .subscribe((data: any) => {
        this.transaccion.cantidadDestino =
          +data.rates[0][this.transaccion.monedaDestino];
        this.service
          .exchange(
            1,
            this.transaccion.monedaOrigen,
            this.transaccion.monedaDestino
          )
          .subscribe((data: any) => {
            this.transaccion.tasaConversion =
              +data.rates[0][this.transaccion.monedaDestino];
            this.service.crearTransaccion(this.transaccion).subscribe((q) => {
              console.log(q);
              this.transaccion = new Transaccion();
              alert('Transaccion Creada');
            });
          });
      });

    console.log(this.transaccion);
  }

  ngOnInit(): void {}
}
