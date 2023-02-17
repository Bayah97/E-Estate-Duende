import { Component, OnInit } from '@angular/core';
import { Company } from '../_dataInterface/company';
import { CompanyService } from '../_services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies:Company[]=[];
  term = '';

  constructor(private CompanyService:CompanyService) { }

  ngOnInit(): void {
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
