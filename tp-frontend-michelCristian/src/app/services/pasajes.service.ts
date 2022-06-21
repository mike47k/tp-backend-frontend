import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root',
})
export class PasajesService {
  constructor(private _http: HttpClient) {}

  getPasajes() {
    return this._http.get('http://localhost:3000/api/pasaje');
  }
  getPasaje(id: string) {
    return this._http.get('http://localhost:3000/api/pasaje/' + id);
  }
  borrarPasaje(id: string) {
    return this._http.delete('http://localhost:3000/api/pasaje/' + id);
  }
  getPasajeCategoria(categoria: string) {
    const httpOptions = {
      params: new HttpParams({}).append('categoria', categoria),
    };
    return this._http.get('http://localhost:3000/api/pasaje/', httpOptions);
  }
  createPasaje(pasaje: Pasaje) {
    return this._http.post('http://localhost:3000/api/pasaje/', pasaje);
  }
  updatePasaje(id: string, pasaje: Pasaje) {
    return this._http.put('http://localhost:3000/api/pasaje/' + id, pasaje);
  }
  getPersonas() {
    return this._http.get('http://localhost:3000/api/persona');
  }
}
