import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clone } from '../_dataInterface/clone';
import { Field } from '../_dataInterface/field';
import { CloneService } from '../_services/clone.service';
import { FieldsInfoService } from '../_services/field-info.service';
import swal from 'sweetalert2'
import { formatDate } from '@angular/common';
import { CropCategoryService } from '../_services/crop-category.service';
import { CropCategory } from '../_dataInterface/cropCategory';


@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.css']
})
export class FieldDetailsComponent implements OnInit {

  fields: Field={} as Field;

  clones:Clone[]=[];
  cropCategories:CropCategory[]=[];
  filterCropCategories:CropCategory[]=[];

  
  constructor(private route:ActivatedRoute, private fieldService:FieldsInfoService,
    private cloneService:CloneService, private cropCategoryService:CropCategoryService) { }

  ngOnInit(): void {
    this.getClone();
    this.getCropCategory();
    this.route.params.subscribe(routeParams=>
      {
        if(routeParams.id != null){
          this.fieldService.getOneField(routeParams.id)
          .subscribe(Response=>{
            this.fields=Response;
            this.getDate();
            this.getcategory(event);
          })
        }
      })
      
      
  }


  getClone(){
    this.cloneService.getClone()
    .subscribe(
      Response=>{
        this.clones=Response
      }
    )
  }

  updateField(field:Field){
    this.fieldService.updateField(field)
    .subscribe(
      Response=>{
        swal.fire("Done!", "Field successfully updated!", "success");
      }
    )
  }

  getDate(){
    var date = new Date(this.fields.dateOpenTapping);
    const format='yyyy-MM-dd';
    const locale='en-US';
    const formattedDate = formatDate(date, format, locale);
    this.fields.dateOpenTapping = formattedDate;
  }

  getCropCategory(){
    this.cropCategoryService.getCropCategory()
    .subscribe(
      Response=>{
        this.cropCategories=Response
      }
    )
  }

  getcategory(event:any)
  {
    this.filterCropCategories=this.cropCategories.filter(c=>c.isMature==this.fields.isMature)
  }

}
