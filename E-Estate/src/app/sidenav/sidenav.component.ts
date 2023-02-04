import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../_dataInterface/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  user = {} as User
  constructor(private userService:UserService ) { }

  ngOnInit(): void {
    // this.userService.getUserProfile()
    // .subscribe(res=>{
    //     this.user = res;
    //   }
    // )
  }

}
