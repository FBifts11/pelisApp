import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetallePeliculasComponent } from './detalle-peliculas/detalle-peliculas.component';

export const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'peliculas', component:PeliculasComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'peliculas/:id', component:DetallePeliculasComponent},
    {path:'**', redirectTo:''},
];