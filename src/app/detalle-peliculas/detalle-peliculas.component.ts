import { Component, OnInit, inject } from '@angular/core';
import { Pelicula, listaPeliculas } from '../peliculas/peliculas.mock';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-peliculas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-peliculas.component.html',
  styleUrl: './detalle-peliculas.component.css'
})
export class DetallePeliculasComponent implements OnInit {

  pelicula?:Pelicula;

  listaPeliculas = listaPeliculas;

  loading:boolean = true

  private _route = inject(ActivatedRoute)

  ngOnInit(): void {

    setTimeout(() => {
      this._route.params.subscribe((params) => {
        this.pelicula = listaPeliculas.find(pelicula => pelicula.id == params['id']) /* El metodo find devuelve el primer elemento
        que coincida con el parametro que le pasamos */
        this.loading = false
      })
    }, 1500);
    
    
  }
}
