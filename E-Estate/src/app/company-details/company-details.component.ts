import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../_dataInterface/company';
import { CompanyService } from '../_services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company :Company = {} as Company;

  constructor(private route: ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams=>
      {
        if(routeParams.id != null)
        {
          this.companyService.getOneCompany(routeParams.id)
          .subscribe(res=>{
            this.company=res
          })
        }
      })
  }

}
