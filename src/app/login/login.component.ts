import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup
  login: Login = new Login()

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private router: Router
    ){}

  ngOnInit() {
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(){
    return this.fb.group({
      email: ['parcial21@eam.edu.co', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      this.extractData()
      this.loginService.onLogin(this.login).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageOk('Bienvenido','login Correcto')        
      }, (error) => {
        SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
        console.log(error);
        
      })
    }else{
      console.log('No válido')
    }
  }

  extractData() {
    this.login.email = this.loginForm.value.email
    this.login.password = this.loginForm.value.password
  }

}
