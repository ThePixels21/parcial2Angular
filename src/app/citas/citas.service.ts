import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/constants';
import { Cita } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  urlApi = environment.API_URL
  urlAsignar = Constants.ASIGNAR_CITA
  urlListar = Constants.LISTAR_CITAS
  urlEditar = Constants.EDITAR_CITA
  urlBuscar = Constants.BUSCAR_CITA

  citas!: Cita[]

  constructor(private http: HttpClient) { }

  onAsignar(cita: Cita) {
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '
      }
    }
    let json = JSON.stringify(cita)
    return this.http.post<any>(this.urlApi + this.urlAsignar, json, options)
  }

  getCitas() {
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '
      }
    }
    return this.http.get<any>(this.urlApi + this.urlListar, options)
  }

  putCita(cita: Cita){
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '
      }
    }
    let json = JSON.stringify(cita)
    return this.http.put<any>(this.urlApi + this.urlEditar, cita, options)
  }

  searchCita(keyword: string){
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '
      }
    }
    return this.http.get<any>(this.urlApi + this.urlBuscar + "/" + keyword, options)
  }

}
