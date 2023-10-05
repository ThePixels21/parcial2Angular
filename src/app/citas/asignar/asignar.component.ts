import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitasService } from '../citas.service';
import { Cita } from '../cita';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent {

  asignarForm!: FormGroup
  cita: Cita = new Cita()

  constructor(
    private fb: FormBuilder, 
    private citasService: CitasService,
    private router: Router
    ){}

  ngOnInit(){
    this.asignarForm = this.iniciarFormulario()
  }

  iniciarFormulario(){
    return this.fb.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      observaciones: ['', [Validators.required]]
    })
  }

  asignar(){
    if(this.asignarForm.valid){
      this.extractData()
      this.citasService.onAsignar(this.cita).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard/citas/listar')
        SwalUtils.customMessageOk('Asignación satisfactoria','Cita asignada correctamente')        
      }, (error) => {
        SwalUtils.customMessageError('Ops! Hubo un error', 'No se pudo asignar')        
        console.log(error);
        
      })
    }else{
      console.log('No se pudo asignar')
    }
  }

  extractData() {
    this.cita.cedula = this.asignarForm.value.cedula
    this.cita.nombre = this.asignarForm.value.nombre
    this.cita.fecha = this.asignarForm.value.fecha
    this.cita.hora = this.asignarForm.value.hora
    this.cita.observaciones = this.asignarForm.value.observaciones
  }

}
