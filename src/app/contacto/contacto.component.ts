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

  public usuario ={
    nombre: '',
    email:''
  }

  enviar(){
    console.log(this.usuario)
  }

} */


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
export class ContactoComponent implements OnInit{

  miFormulario: FormGroup;
  
  usuarioActivo = {
      nombre: '',
      apellido:'Juarez',
      tipoDni:'DNI',
      dni:'1234567',
      email:''
  }


  constructor(private fb:FormBuilder){
    this.miFormulario = fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoDni: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.miFormulario.patchValue({
      nombre : this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni
    })

    //this.miFormulario.get('nombre')?.disable();
    this.miFormulario.get('apellido')?.disable();

    /* this.miFormulario.valueChanges.subscribe( valor => {
      console.log(valor)
    }) */

    this.miFormulario.get('tipoDni')?.valueChanges.subscribe( valor => {
      this.usuarioActivo.tipoDni = valor
    })
  }


  enviar(){

    console.log(this.miFormulario.value )
  }


  tieneErrores(control: string, error:string){
    return this.miFormulario.get(control)?.hasError(error) && this.miFormulario.get(control)?.touched

  }
}
