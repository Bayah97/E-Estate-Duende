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
  constructor(private router:Router,
    private spinnerService:SpinnerService) { }

  ngOnInit(): void {
    var token = localStorage.getItem('AccessToken')
    if(token != null)
    {
      this.router.navigateByUrl('/e-estate/home')
    }
    else
    {

    }
  }

  login(){
      this.spinnerService.requestStarted();
      setTimeout(()=>{
          this.spinnerService.requestEnded()
          this.router.navigateByUrl('/redirect')
      }, 2000);
    }
}
