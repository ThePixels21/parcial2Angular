import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../cita';
import { CitasService } from '../citas.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  editarForm: FormGroup = new FormGroup({})
  citas!: Cita[]
  cita!: Cita
  id_cita!: string

  constructor(
    private fb: FormBuilder, 
    private citasService: CitasService,
    private router: Router,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.id_cita = params['id']
    })
    this.citas = this.citasService.citas
    this.obtenerCita()
    this.editarForm = this.iniciarFormulario()
  }

  obtenerCita(){
    for(let cita of this.citas){
      if(cita._id == this.id_cita){
        this.cita = cita
      }
    }
    console.log(this.cita.nombre)
  }

  iniciarFormulario(){
    return this.fb.group({
      cedula: [this.cita.cedula, [Validators.required]],
      nombre: [this.cita.nombre, [Validators.required]],
      fecha: [this.cita.fecha, [Validators.required]],
      hora: [this.cita.hora, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      observaciones: [this.cita.observaciones, [Validators.required]]
    })
  }

  editar(){
    if(this.editarForm.valid){
      this.extractData()
      this.citasService.putCita(this.cita).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard/citas/listar')
        SwalUtils.customMessageOk('Edición satisfactoria','Cita editada correctamente')        
      }, (error) => {
        SwalUtils.customMessageError('Ops! Hubo un error', 'No se pudo editar')        
        console.log(error);
        
      })
    } else {
      console.log('No se pudo editar')
    }
  }

  extractData() {
    this.cita.cedula = this.editarForm.value.cedula
    this.cita.nombre = this.editarForm.value.nombre
    this.cita.fecha = this.editarForm.value.fecha
    this.cita.hora = this.editarForm.value.hora
    this.cita.observaciones = this.editarForm.value.observaciones
  }

}
