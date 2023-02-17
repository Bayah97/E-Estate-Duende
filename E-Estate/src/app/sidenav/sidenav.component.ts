import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { User } from '../_dataInterface/user';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  user = {} as User
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    this.authService.setProfile()
    .subscribe(res=>
      this.user = res
    )
  }

}
