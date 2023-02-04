import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SpinnerService } from '../_services/spinner.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Username:'',
    Password:''
  }
  constructor(private userService:UserService, private router:Router,
    private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  login(){
    this.router.navigateByUrl('/redirect')
  }

}
