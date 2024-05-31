//Formulario basado en plantilla

/* import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  public usuario = {
    nombre: '',
    email:''
  }

  enviar() {
    console.log(this.usuario);
  }
} */



/* -------------------------------------------------------------------------------------------------------------------------- */




// Formulario reactivo

import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  miFormulario: FormGroup;

  usuarioActivo = {
    nombre: 'Pedro',
    apellido: '',
    tipoDni: 'DNI',
    dni: ''
  };

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      dni: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.email, Validators.required]]
    })
  }
  ngOnInit(): void {
    
    
    this.miFormulario.get('nombre')?.setValue(this.usuarioActivo.nombre); //Toma el valor seteado en el objeto usuarioActivo
    this.miFormulario.get('nombre')?.disable(); //Deshabilita el input
 
    this.miFormulario.get('nombre')?.clearValidators(); //Elimina los validadores del input
    this.miFormulario.get('nombre')?.updateValueAndValidity(); //Actualiza el estado del input

    /* clearValidators y updateValueAndValidity no lo vimos en clase. Pero como para que los conozcan, prueben de comentar
    el setValue y el disable de las lineas 68 y 69 y van a ver que las validaciones que pusieron el en formulario para el campo
    nombre ya no van a estar activas.*/

    this.miFormulario.get('tipoDni')?.valueChanges.subscribe(valor => {
      this.usuarioActivo.tipoDni = valor;
    })
  }

  enviar() {
    console.log(this.miFormulario.value)
  }

  tieneErrores(control: string, error: string) {
    return this.miFormulario.get(control)?.hasError(error) && this.miFormulario.get(control)?.touched
  }

}
