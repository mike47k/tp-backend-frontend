import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroDestacadosComponent } from './components/libro-destacados/libro-destacados.component';
import { CrearLibrosComponent } from './components/crear-libros/crear-libros.component';
import { HeaderComponent } from './components/header/header.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { ListaTransaccionesComponent } from './components/lista-transacciones/lista-transacciones.component';
import { ListaPasajesComponent } from './components/lista-pasajes/lista-pasajes.component';
import { CrearPasajeComponent } from './components/crear-pasaje/crear-pasaje.component';

@NgModule({
  declarations: [AppComponent, LibroDestacadosComponent, CrearLibrosComponent, HeaderComponent, TransaccionesComponent, ListaTransaccionesComponent, ListaPasajesComponent, CrearPasajeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
