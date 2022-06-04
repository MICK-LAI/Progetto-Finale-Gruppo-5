import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/models/LoggedUser';
import { BackendService } from 'src/service/backend.service';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoggedUser | null = null;
  invalidLogin: boolean | null = null;
  showPwd: boolean = false;


  constructor(
    private router: Router,
    private loginservice: AuthenticationService, private backendAPIService: BackendService){ }

  ngOnInit(): void {
  }

  
  checkLogin(loginForm: NgForm){
    this.backendAPIService.login(loginForm.controls['username'].value, loginForm.controls['password'].value).subscribe({
      next: (res) => {
        this.user = res;
        if(this.user != null){
          this.invalidLogin = false,
          sessionStorage.setItem('username', loginForm.controls['username'].value),         
          sessionStorage.setItem('user_id', this.user.id.toString()),
          this.router.navigate(['/home'])
        }else{
          this.invalidLogin = true ,
          console.log('Error!',res) 
        }      
      },
      error: (res) => {
        this.invalidLogin = true 
        console.log('Error!',res)               
      }
      
    })   
  }

  password(){
    this.showPwd = !this.showPwd;
  }

}
