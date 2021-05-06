import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [

  { path: 'busqueda', component: BusquedaComponent },

  { path: '', redirectTo: '/busqueda', pathMatch: 'full' },
  

  {
    path: 'actor',

    children:
      [
        { path: 'alta', component: ActorAltaComponent },
        { path: 'listado', component: ActorListadoComponent },
      ]

  },

  {
    path: 'peliculas',

    children:
      [
        { path: 'alta', component: PeliculaAltaComponent },
        { path: 'alta', component: PeliculaListadoComponent }
      ]

  },

  {
    path: 'paises',

    children:
      [
        { path: 'listado', component: PaisesListadoComponent },
      ]

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
