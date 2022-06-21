import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroDestacadosComponent } from './components/libro-destacados/libro-destacados.component';
import { CrearLibrosComponent } from './components/crear-libros/crear-libros.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { ListaTransaccionesComponent } from './components/lista-transacciones/lista-transacciones.component';
import { ListaPasajesComponent } from './components/lista-pasajes/lista-pasajes.component';
import { CrearPasajeComponent } from './components/crear-pasaje/crear-pasaje.component';
const routes: Routes = [
  { path: 'librosD', component: LibroDestacadosComponent },
  { path: 'librosC', component: CrearLibrosComponent },
  { path: 'paL', component: ListaPasajesComponent },
  { path: 'paC', component: CrearPasajeComponent },
  { path: 'paC/:id', component: CrearPasajeComponent },
  { path: 'transacciones', component: TransaccionesComponent },
  { path: 'transaccionesLista', component: ListaTransaccionesComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'librosC' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
