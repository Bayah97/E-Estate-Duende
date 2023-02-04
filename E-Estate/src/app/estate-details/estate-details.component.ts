import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estate } from '../_dataInterface/estate';
import { EstateService } from '../_services/estate.service';

@Component({
  selector: 'app-field',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.css']
})
export class EstateDetailsComponent implements OnInit {

  estates: Estate = {} as Estate;

  constructor(private route: ActivatedRoute, private estateService:EstateService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams=>
      {
        if(routeParams.id != null){
          this.estateService.getOneEstate(routeParams.id)
          .subscribe(res=>{
            this.estates=res;
          })
        }
      })
  }
}
