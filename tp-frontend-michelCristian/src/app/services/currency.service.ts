import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private _http: HttpClient) {}
  listOfCurrency() {
    const httpOptinos = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
        'X-RapidAPI-Key': '11b13d0f5fmsh2021340b12bbfdep1b0766jsnefa0491216cd',
      }),
    };
    return this._http.get(
      'https://currency-exchange.p.rapidapi.com/listquotes',
      httpOptinos
    );
  }
  exchange(amount: number, from: string, to: string) {
    const httpOptinos = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '11b13d0f5fmsh2021340b12bbfdep1b0766jsnefa0491216cd',
        'X-RapidAPI-Host': 'currency-converter23.p.rapidapi.com',
      }),
      params: new HttpParams({})
        .append('from', from)
        .append('to', to)
        .append('amount', amount.toString()),
    };

    return this._http.get(
      'https://currency-converter23.p.rapidapi.com/rate',
      httpOptinos
    );
  }
  crearTransaccion(trans: Transaccion) {
    return this._http.post('http://localhost:3000/api/transaccion', trans);
  }
  listTransacciones() {
    return this._http.get('http://localhost:3000/api/transaccion');
  }
  filtroTransacciones(de: string, a: string) {
    const httpOptinos = {
      params: new HttpParams({})
        .append('monedaOrigen', de)
        .append('monedaDestino', a),
    };
    return this._http.get(
      'http://localhost:3000/api/transaccion/',
      httpOptinos
    );
  }
}
