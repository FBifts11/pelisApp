/* Con las interfaces establecemos la estructura y el tipo de dato que va a tener nuestro objeto,
ademas pusimos que la clave descripcion puede ser opcional.
*/

export const listaPeliculas: Pelicula[] = [
    { id: 1, nombre: 'Ana y el Rey', genero: 'Drama', precio: 200, descripcion: 'La maestra que enamoro al reino' },
    { id: 2, nombre: 'Volver al Futuro', genero: 'Ciencia Ficcion', precio: 600, descripcion: 'La mejor pelicula de todos los timepos' },
    { id: 3, nombre: 'Pecados capitales', genero: 'Suspenso', precio: 100, descripcion: 'Brad Pitt en uno de sus mejores papeles' },
    { id: 4, nombre: 'Robin Hood', genero: 'Aventura', precio: 350 },
    { id: 5, nombre: 'El Señor de los anillos', genero: 'Aventura', precio: 400, descripcion: 'Las aventuras de la comunidad del anillo' },
    { id: 6, nombre: 'Casablanca', genero: 'Drama', precio: 250, descripcion: 'Clasico que nunca pasa de moda' },

]

export interface Pelicula {
    id: number,
    nombre:string,
    genero:string,
    precio:number,
    descripcion?:string

}