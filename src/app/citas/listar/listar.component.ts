import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitasService } from '../citas.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  citas!: Cita[]

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.citasService.getCitas().subscribe((res) => {
      console.log(res);
      if (res) {
        this.citas = res.citas
        this.citasService.citas = this.citas
        console.log(this.citas);
        
      } else {
        SwalUtils.customMessageError("Error", "No se encontratron datos")
      }
    }, (error) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }

}
