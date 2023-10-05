import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitasService } from '../citas.service';
import { ActivatedRoute } from '@angular/router';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  citas!: Cita[]
  keyword!: string

  constructor(
    private citasService: CitasService,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.keyword = params['keyword']
    })
    this.getSearch()
  }

  getSearch(){
    this.citasService.searchCita(this.keyword).subscribe((res) => {
      console.log(res);
      if (res) {
        this.citas = res.cita
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
