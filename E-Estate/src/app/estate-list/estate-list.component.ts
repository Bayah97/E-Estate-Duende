import { Component, OnInit } from '@angular/core';
import { Estate } from '../_dataInterface/estate';
import { EstateService } from '../_services/estate.service';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent implements OnInit {

  estates:Estate[]=[];
  term = '';
  
  constructor(private EstateService:EstateService) { }

  ngOnInit(): void {
    this.getAllEsates()
  }

  getAllEsates(){
    this.EstateService.getAllEstates()
    .subscribe(
      Response=>{
        this.estates=Response;
      }
    );
  }

}
