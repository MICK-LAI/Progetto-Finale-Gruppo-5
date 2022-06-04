import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddedUser } from 'src/models/AddedUser';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isRegistered: boolean | null = false;

  constructor(private backendAPIService:BackendService ) { }

  ngOnInit(): void {
  }

  addUser(registrationForm: NgForm){
    let user: AddedUser = {
      username: registrationForm.controls['username'].value, password: registrationForm.controls['password'].value,
    };
    
    this.backendAPIService.regitrattion(user).subscribe({
      next: (res) => {
        if(res != null){
          this.isRegistered = true;
          console.log("reistrato", res);
        }else{
          this.isRegistered = false;
          console.log("non registrato, valore null", res);
        }
        
      },
      error: (err) => {
        this.isRegistered = false;
        console.log("non registrato", err);
      }
    })
  }

  

}
