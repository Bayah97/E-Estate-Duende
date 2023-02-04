import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './_dataInterface/user';
import { UserService } from './_services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  
  title = 'E-Estate';
  selectedRoute: string | undefined;

    //single record
    user = {} as User;


  constructor(private observer:BreakpointObserver,private changeDetector: ChangeDetectorRef,
    private router:Router, private userService:UserService){
  
  }

//   ngAfterViewInit() {
//     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
//       if (res.matches) {
//         this.sidenav.mode = 'over';
//         this.sidenav.close();
//       } else {
//         this.sidenav.mode = 'side';
//         this.sidenav.open();
//       }
//     });
//   }

//   ngAfterViewChecked() {
//    this.changeDetector.detectChanges();
// }

  ngOnInit(){
    // this.userService.getUserProfile()
    // .subscribe(res=>{
    //     this.user = res;
    //   }
    // )
  }

  // logOut(){
  //   localStorage.removeItem('token');
  //   this.router.navigateByUrl('/login')
  // }
}
