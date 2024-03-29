
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Observable } from 'rxjs';
import { Actor } from './../clases/actor';


@Injectable({
  providedIn: 'root',
})
export class ActorServiceService {
  rutaDeLaColeccion = '/actores';
  referenciaAlaColeccion: AngularFirestoreCollection<Actor>;
  referenciaBd: AngularFirestore;
  actores:Observable<any[]>;

  constructor(private bd: AngularFirestore) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

    this.actores = this.referenciaAlaColeccion.valueChanges(this.rutaDeLaColeccion)


  }

  getAll(){
    return this.actores;
  }

  Crear(actor: Actor): any {
    
    return this.referenciaAlaColeccion.add({ ...actor });

  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }


  public BuscarActor(actor: Actor) {
    return this.referenciaBd.collection(this.rutaDeLaColeccion, ref => ref.where("nombre", "==", actor.nombre).where("apellido", "==", actor.apellido).where("edad", "==", actor.fechaDeNacimiento).where("sexo", "==", actor.sexo).where("nacionalidad", "==", actor.paisOrigen).where("foto", "==", actor.foto));
  }


}

