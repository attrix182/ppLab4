
import { Actor } from './../../clases/actor';
import { Pais } from './../../clases/pais';
import { ActorServiceService } from './../../servicios/actor-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})

export class ActorAltaComponent implements OnInit {

 
  unPaisSeleccionado: Pais;

  public unActor: Actor;


  public constructor(private servicioActor: ActorServiceService) { this.unActor = new Actor(); }

  cambiarPais(elPais: any) {
    console.log("Cambiando pais");
    console.log(elPais);
    this.unPaisSeleccionado = elPais;
    this.unActor.paisOrigen = elPais;
  }

  ngOnInit() {


  }


  addActor() {

    this.servicioActor.Crear(this.unActor).then(() => {

      console.log('se envio el Actor');
      console.log(this.unActor);
    })


  }
}

