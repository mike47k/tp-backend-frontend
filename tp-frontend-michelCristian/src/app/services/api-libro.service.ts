import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class ApiLibroService {
  constructor(private _http: HttpClient) {}

  crearLibro(libro: Libro) {
    return this._http.post('http://localhost:3000/api/libro', libro);
  }
  obtenerLibrosDestacados() {
    return this._http.get('http://localhost:3000/api/libro/destacados');
  }
}
