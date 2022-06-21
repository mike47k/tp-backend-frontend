import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajesService } from 'src/app/services/pasajes.service';

@Component({
  selector: 'app-crear-pasaje',
  templateUrl: './crear-pasaje.component.html',
  styleUrls: ['./crear-pasaje.component.css'],
})
export class CrearPasajeComponent implements OnInit {
  personas: Persona[] = [];
  pasaje: Pasaje = new Pasaje();
  persona: Persona = new Persona();
  desc!: number;
  accion: string = 'new';

  constructor(
    private service: PasajesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.iniciar();
  }

  iniciar() {
    this.personas = [];
    this.pasaje = new Pasaje();
    this.persona = new Persona();
    this.pasaje.pasajero = this.persona;
    this.service.getPersonas().subscribe((q: any) => {
      this.personas = q;
      console.log(q);
    });
  }
  crearPasaje() {
    this.pasaje.precioPasaje = this.desc;
    console.log(this.pasaje);
    this.service.createPasaje(this.pasaje).subscribe((q) => {
      console.log(q);
      this.iniciar();
      alert('Pasaje Creado');
    });
  }
  descuent() {
    this.desc = this.pasaje.precioPasaje;
    if (this.pasaje.categoriaPasajero === 'j') {
      this.desc = this.pasaje.precioPasaje * 0.5;
    }
    if (this.pasaje.categoriaPasajero === 'm') {
      this.desc = this.pasaje.precioPasaje * 0.75;
    }
  }
  obtenerUnPasaje(id: string) {
    this.service.getPasaje(id).subscribe((q: any) => {
      this.pasaje = q;
      console.log(q);
    });
  }
  updatePasaje() {
    this.service.updatePasaje(this.pasaje._id, this.pasaje).subscribe((q) => {
      console.log(q);
      this.iniciar();
      alert('Pasaje Editado');
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params['id']) {
        this.accion = 'new';
      } else {
        this.accion = 'update';
        this.obtenerUnPasaje(params['id']);
      }
    });
  }
}
