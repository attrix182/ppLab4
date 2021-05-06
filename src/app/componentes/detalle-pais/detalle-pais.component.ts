import { Pais } from './../../clases/pais';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() paisSeleccionado:Pais;

  constructor() { }

  ngOnInit(): void {
  }

}
