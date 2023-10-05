import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Constants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApi = environment.API_URL
  urlLogin = Constants.VALIDATE_WITH_LOGIN

  constructor(private http: HttpClient) { }

  onLogin(login: Login){
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.urlApi+this.urlLogin,json,options)
  }

}
