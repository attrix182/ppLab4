import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paises: any[]=[];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://restcountries.eu/rest/v2/region/americas').subscribe((data: any) => {
      data.forEach(element => {
        this.paises.push(element)
      });
    });
  }

  getPaises() {
    return this.paises;
  }

  eliminarPais(pais) {
    let eliminar;
    for (let index = 0; index < this.paises.length; index++) {
      if (pais.name == this.paises[index].name) {
        eliminar = index;
      }
    }
    this.paises.splice(eliminar, 1);
  }
  
}