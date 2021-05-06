import { Pais } from './../../clases/pais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.scss']
})
export class PaisesListadoComponent implements OnInit {

  paisParaMostar:Pais;

  constructor() { }

  ngOnInit(): void {
  }

  tomarPaisParaDetalles(pais: Pais)
  {console.log(pais)
    this.paisParaMostar=pais;   
  }

}
