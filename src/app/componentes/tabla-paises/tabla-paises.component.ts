import { PaisesService } from 'src/app/servicios/paises.service';

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})

export class TablaPaisesComponent implements OnInit {


  public listaPaises: any[] = [];

  @Output() paisSeleccionadoEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() paisDeshabilitadoInput: any;

  constructor(private paisesService: PaisesService) {

    this.listaPaises =   this.paisesService.getPaises()
  }

  ngOnInit(): void {
 
  }

  seleccionarPais(pais : any)
  {
    this.paisSeleccionadoEvent.emit(pais)
  }

  noMostrarDeshabilitados(){
    if(this.paisDeshabilitadoInput!=undefined){
      this.paisesService.eliminarPais(this.paisDeshabilitadoInput)
    }
    return true;
  }

}
