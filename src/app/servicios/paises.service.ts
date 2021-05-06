import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

    public paisActual;
  
    constructor(private http: HttpClient) {
  
      this.paisActual = "Argentina";
  
    }
  
    public obtenerPaisActual() {
      return this.paisActual;
    }
  
    public asignarPaisActual(pais: string) {
  
      this.paisActual = pais;
  
    }
  
    traerPaises() {
      return this.http.get("https://restcountries.eu/rest/v2/region/americas");
  
    }
  
    traerUnPais(pais: string) {
  
  
    }
  
  }