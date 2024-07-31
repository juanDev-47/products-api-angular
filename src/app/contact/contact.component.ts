import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  formularioContacto: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),

  })
  usuarioValido: string = 'Pedro';

  
  constructor(private form: FormBuilder){}

  ngOnInit(): void {
    this.formularioContacto = this.form.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })
    this.formularioContacto.get('name')?.valueChanges.subscribe(valor => {
      console.log(valor)
    });
    // otra forma con el this.formularioContacto.patchValue({ TODOS LOS valores requeridos })
    // this.formularioContacto.get('name')?.setValue(this.usuarioValido);
    // this.formularioContacto.get('name')?.disable();
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto)
  }

}
