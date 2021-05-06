import { PaisesService } from 'src/app/servicios/paises.service';
import { Pais } from './../../clases/pais';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.scss']
})
export class PaisesListadoComponent implements OnInit {

  paisParaMostar:Pais;

  paises: any;
  paisesListado;
  pais:any;
  paisDeshabilitar:any;

  constructor(private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paisesListado = this.paisesService.getPaises();
  }

  tomarPaisParaDetalles(pais: Pais)
  {
    console.log(pais)
    this.paisParaMostar=pais;   
  }


  getPais( pais:any ){

    this.paisDeshabilitar = pais
   

  }
  
}
