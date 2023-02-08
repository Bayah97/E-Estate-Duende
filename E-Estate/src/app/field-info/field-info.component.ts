import { Component, OnInit } from '@angular/core';
import { Field } from '../_dataInterface/field';
import { FieldsInfoService } from '../_services/field-info.service';
import swal from 'sweetalert2'
import { Clone } from '../_dataInterface/clone';
import { CloneService } from '../_services/clone.service';
import { CropCategoryService } from '../_services/crop-category.service';
import { CropCategory } from '../_dataInterface/cropCategory';
import { DatePipe, formatDate } from '@angular/common';


@Component({
  selector: 'app-field-info',
  templateUrl: './field-info.component.html',
  styleUrls: ['./field-info.component.css']
})
export class FieldInfoComponent implements OnInit {

  fields:Field[]=[];
  clones:Clone[]=[];
  cropCategories:CropCategory[]=[];
  filterCropCategories:CropCategory[]=[];
  
  field: Field={} as Field;

  total=0;
  value:any;

  constructor(private fieldService:FieldsInfoService, private cloneService:CloneService,
    private cropCategoryService:CropCategoryService, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.getAllField();
    this.getClone();
    this.getCropCategory();
    var date = new Date();
    const format='yyyy';
    const locale='en-US';
    const formattedDate = formatDate(date, format, locale);
    this.field.yearPlanted = formattedDate;
  } 
  
  getAllField(){
    this.fieldService.getAllFields()
    .subscribe(
      Response=>{
        this.fields=Response;
        this.sum(this.fields)
      }
    )
    
  }

  onSubmit(){
    this.fieldService.addField(this.field)
    .subscribe(
      Response=>{
        this.getAllField();
        swal.fire("Done!", "Field successfully submitted!", "success");
        this.reset();
      }
    )
  }

  getClone(){
    this.cloneService.getClone()
    .subscribe(
      Response=>{
        this.clones=Response;
      }
    )
  }

  reset(){
    this.field = {} as Field;
  }  

  sum(data:any)
  {
    this.value=data
    for(let j=0;j<data.length;j++){   
      this.total += this.value[j].area  
    }
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
    this.filterCropCategories=this.cropCategories.filter(c=>c.isMature==this.field.isMature)
  }
}
