import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.register()
    .subscribe(
      res =>{
        swal.fire("Done!", "Account successfully registered!", "success");
        this.router.navigateByUrl('/home');
      }
    )
  }

}
