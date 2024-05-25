import { Component } from '@angular/core';
import { listaPeliculas } from './peliculas.mock';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  listaPeliculas = listaPeliculas;  /* Nos traemos la lista de peliculas del mock
                                    a nuestro componente para poder utilizarlo */
}
