import { Component, OnInit } from '@angular/core';
import { Estate } from '../_dataInterface/estate';
import { Town } from '../_dataInterface/town';
import { EstateService } from '../_services/estate.service';
import swal from 'sweetalert2'
import { EstateStatusService } from '../_services/estate-status.service';
import { EstateStatus } from '../_dataInterface/EstateStatus';
import { User } from '../_dataInterface/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {

  estates:Estate[]=[];
  towns:Town[]=[];

  estate ={} as Estate;
  history = {} as EstateStatus;
  user = {} as User;

  constructor(private EstateService:EstateService, private estateStatusService:EstateStatusService,
    private userService:UserService) {
   }

  ngOnInit(): void {
    this.getAllEsates();
    this.getUser();
  }
  
  getAllEsates(){
    this.EstateService.getAllEstates()
    .subscribe(
      Response=>{
        this.estates=Response;
      }
    );
  }

  changeStatus(estate:Estate, history:EstateStatus){
   this.EstateService.updateStatus(estate)
   .subscribe(
    Response=>{
      history.estateId = estate.id;
      history.status = Response.status;
      var date = new Date();
      history.updatedDate = date;
      history.UserId = this.user.id;
      this.estateStatusService.addEstateStatus(history)
      .subscribe(
        Response=>{
          swal.fire("Done!", "Status successfully updated!", "success");
        }
      )
      this.getAllEsates()
    }
   )

  }

  getUser(){
    this.userService.getUserProfile()
    .subscribe(res=>{
        this.user = res;
      }
    )
  }

}
