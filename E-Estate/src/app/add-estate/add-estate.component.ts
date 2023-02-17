import { Component, OnInit } from '@angular/core';
import { Estate } from '../_dataInterface/estate';
import { EstateService } from '../_services/estate.service';
import { Town } from '../_dataInterface/town';
import swal from 'sweetalert2'
import { TownService } from '../_services/town.service';
import { FinancialYearService } from '../_services/financial-year.service';
import { FinancialYear } from '../_dataInterface/financialYear';
import { MembershipType } from '../_dataInterface/membership';
import { MembershipService } from '../_services/membership.service';
import { EstablishmentService } from '../_services/establishment.service';
import { Establishment } from '../_dataInterface/establishment';
import { State } from '../_dataInterface/state';
import { StateService } from '../_services/state.service';
import { EstateStatusService } from '../_services/estate-status.service';
import { EstateStatus } from '../_dataInterface/EstateStatus';
import { UserService } from '../_services/user.service';
import { User } from '../_dataInterface/user';

@Component({
  selector: 'app-add-estate',
  templateUrl: './add-estate.component.html',
  styleUrls: ['./add-estate.component.css']
})
export class AddEstateComponent implements OnInit {

  towns:Town[]=[];
  financialYears:FinancialYear[]=[];
  memberships:MembershipType[]=[];
  establishments:Establishment[]=[];
  states:State[]=[];

  estate: Estate={} as Estate;
  history = {} as EstateStatus;
  user = {} as User;

  filterTown:Town[]=[];
  
  constructor(private estateServie:EstateService, private townService:TownService,
    private financialYearService:FinancialYearService, private membershipService:MembershipService,
    private establishmentService:EstablishmentService, private stateService:StateService,
    private estateStatusService:EstateStatusService, private userService:UserService) { }

  ngOnInit(): void {
    this.getTown();
    this.getFinancialYear();
    this.getMembership();
    this.getEstablishment();
    this.getState();
    this.getUser();
  }

  onSubmit(){
    this.estate.status="Active"
    this.estateServie.addEstate(this.estate)
    .subscribe(
      Response=>{
      this.history.estateId = Response.id;
      this.history.status = Response.status;
      var date = new Date();
      this.history.updatedDate = date;
      this.history.UserId = this.user.id;
      this.estateStatusService.addEstateStatus(this.history)
      .subscribe(
        Response=>{
        }
      )
        swal.fire("Done!", "Estate successfully submitted!", "success");
        this.reset();
      }
    )
  }

  getTown(){ 
    this.townService.getTown()
    .subscribe(
      Response=>{
        this.towns=Response;
      }
    )
  }

  gettown(event:any)
  {
    this.filterTown=this.towns.filter(e=>e.stateId == event.target.value);
  }

  getFinancialYear(){
    this.financialYearService.getAllFinancialYear()
    .subscribe(
      Response=>{
        this.financialYears=Response;
      }
    )
  }

  getMembership(){
    this.membershipService.getAllMembership()
    .subscribe(
      Response=>{
        this.memberships=Response;
      }
    )
  }

  getEstablishment(){
    this.establishmentService.getEstablishment()
    .subscribe(
      Response=>{
        this.establishments=Response;
      }
    )
  }

  reset(){
    this.estate = {} as Estate;
  }

  getState(){
    this.stateService.getState()
    .subscribe(
      Response=>{
        this.states=Response;
      }
    )
  }

  getUser(){
    // this.userService.getUserProfile()
    // .subscribe(res=>{
    //     this.user = res;
    //   }
    // )
  }

}
