import { Pais } from './../../clases/pais';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() paisSeleccionado: any;

  @Output() paisOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  borrarPais(paisSeleccionado: any) {
    //  console.log(this.paisSeleccionado)
    this.paisOutput.emit(paisSeleccionado);

    this.paisSeleccionado = null;

  }
}
