import { PaisesService } from 'src/app/servicios/paises.service';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})

export class TablaPaisesComponent implements OnInit {

  public miPais: string = "";  

  public listaPaises: any[] = [];

  @Output() paisSeleccionadoEvent: EventEmitter<any> = new EventEmitter<any>();  

  constructor(private paisesService: PaisesService) {

    this.paisesService.traerPaises().subscribe(
      (data: any) => {
        this.listaPaises = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {

    this.miPais = this.paisesService.obtenerPaisActual();

    this.paisesService.traerPaises().subscribe(result => {

    })
  }

  seleccionarPais(pais) {
    console.log(pais);
    this.paisSeleccionadoEvent.emit(pais);
  }

}
