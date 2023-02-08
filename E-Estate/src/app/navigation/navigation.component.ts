import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from '../_dataInterface/user';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

      //single record
      user = {} as User;
  
  constructor(private router:Router,private observer:BreakpointObserver,private changeDetector: ChangeDetectorRef,
   private userService:UserService, private authService:AuthService) { }

  ngOnInit(): void {
    // this.userService.getUserProfile()
    // .subscribe(res=>{
    //     this.user = res;
    //   }
    // )
  }

  logOut(){
    sessionStorage.removeItem('token');
    this.authService.startLogOut();
  }

  ngAfterViewInit() {
        this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
      }
    
  ngAfterViewChecked() {
       this.changeDetector.detectChanges();
    }

}
