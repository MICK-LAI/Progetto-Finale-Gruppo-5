import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/service/backend.service';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string | null = null;

   constructor(public loginService: AuthenticationService, private backendService:BackendService) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
  }

  

}
