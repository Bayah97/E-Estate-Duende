import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from '../_dataInterface/user';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

      //single record
      user = {} as User;
      
  constructor(private userService:UserService, private authService:AuthService ) { }

  ngOnInit(): void {
    this.authService.setProfile()
    .subscribe(res=>
      this.user = res
      )
    }



  api(){
    this.userService.getWeather()
    .subscribe(
      Response=>{
        console.log(Response)
      }
    )
  }


}
