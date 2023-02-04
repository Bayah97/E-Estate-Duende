import { Component, OnInit } from '@angular/core';
import { Country } from '../_dataInterface/country';
import { CountryService } from '../_services/country.service';
import { Labor } from '../_dataInterface/labor';
import { LaborService } from '../_services/labor.service';
import swal from 'sweetalert2'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-labor-info',
  templateUrl: './labor-info.component.html',
  styleUrls: ['./labor-info.component.css']
})
export class LaborInfoComponent implements OnInit {

  countries:Country[]=[];
  labors:Labor[]=[];

  labor: Labor={} as Labor;

  totalWorker?:Number;
  
  previousMonth=new Date();

  filterLabor:Labor[]=[];

  Date:any;

  constructor(private countryService:CountryService, private laborService:LaborService,
    private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.previousMonth.setMonth(this.previousMonth.getMonth()-1);
    this.Date = this.datePipe.transform(this.previousMonth, 'MMM-yyyy')
    this.getLabor();
    this.getCountry();
  }

  onSubmit(){
    this.laborService.addLabor(this.labor)
    .subscribe(
      Response=>{
        swal.fire("Done!", "Labor information successfully submitted!", "success");
        this.getLabor();
        this.reset();
      }
    )
  }

  getCountry(){
    this.countryService.getCountry()
    .subscribe(
      Response=>{
        this.countries=Response;
      }
    )
  }

  getLabor(){
    this.laborService.getAllLabor()
    .subscribe(
      Response=>{
        this.labors=Response;
        this.filterLabor= this.labors.filter(e=>e.monthYear== this.Date)
        this.sum(this.labors) ; 
      }
    )
  }

  calculateWorker(){
    this.totalWorker = this.labor.tapperCheckrole + this.labor.tapperContractor + this.labor.fieldCheckrole + this.labor.fieldContractor ;
  }

  reset(){
    this.labor={} as Labor;
    this.totalWorker = 0
  }

  delete(id:number)
  {
    swal.fire({
      title:"Are you sure to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel'
    })
    .then((result) => {  
        if (result.isConfirmed) { 
          this.laborService.deleteLabor(id)
          .subscribe(
            Response =>{
              swal.fire('Deleted!',  
              'Labor information has been deleted.',  
              'success') ,
              this.getLabor(); 
            }
          )
        } else if (result.isDenied) {    
       }
    });
  }

  sum(row:Labor[])
  {
    row.forEach(x =>
    {
      x.total =  x.fieldCheckrole + x.fieldContractor + x.tapperCheckrole + x.tapperContractor
    });
    
  }

  monthSelected(month:string){
    let monthDate = new Date(month);
    this.Date = this.datePipe.transform(monthDate, 'MMM-yyyy')
    this.labor.monthYear  = this.datePipe.transform(monthDate, 'MMM-yyyy')
    this.getLabor();
  }

}
