import { Component } from '@angular/core';
import  { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent {

  constructor( private fb: FormBuilder ) {}

  formUser = this.fb.group({
    'nombre': ['', Validators.required],
    'apellido': ['', Validators.required],
    'email': ['',[Validators.required, Validators.email]],
    'codigoPostal': ['', Validators.required]
  });

  get nombre() {
    return this.formUser.controls['nombre'];
  }

  get apellido() {
    return this.formUser.controls['apellido'];
  }

  get email() {
    return this.formUser.controls['email'];
  }

  get cp() {
    return this.formUser.controls['codigoPostal'];
  }


  enviarForm(): void {
    console.log(this.formUser.value);
    this.formUser.reset();
  }

  limpiarForm() {
    this.formUser.reset();
  }

}
