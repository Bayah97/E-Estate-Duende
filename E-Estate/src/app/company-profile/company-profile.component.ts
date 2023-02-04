import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../_dataInterface/company';
import { User } from '../_dataInterface/user';
import { CompanyService } from '../_services/company.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  companies:Company[]=[];
  //single record
  user = {} as User;
  
  constructor(private router:Router, private CompanyService:CompanyService,
    private userService:UserService) { }

  ngOnInit(): void {
    // this.userService.getUserProfile()
    // .subscribe(res=>{
    //     this.user = res;
    //   }
    // )
    this.getCompany(); 
  }

  getCompany(){
    this.CompanyService.getCompany()
    .subscribe(
      Response=>{
        this.companies=Response;
      }
    )
  }

}
