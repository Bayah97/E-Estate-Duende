import { Component, OnInit } from '@angular/core';
import { CropArea } from 'src/app/_dataInterface/cropArea';
import { CropCategory } from 'src/app/_dataInterface/cropCategory';
import { CropAreaService } from 'src/app/_services/crop-area.service';
import { CropCategoryService } from 'src/app/_services/crop-category.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-mature-rubber',
  templateUrl: './mature-rubber.component.html',
  styleUrls: ['./mature-rubber.component.css']
})
export class MatureRubberComponent implements OnInit {

  cropCategories:CropCategory[]=[];
  filterCropCategories:CropCategory[]=[];
  cropType='Mature Rubber'

  areas:CropArea[]=[]
  cropAreas:CropArea[]=[]
  filterCropAreas:CropArea[]=[]

  total=0;
  filterAreas:any;
  value:any;
  term='';

  constructor(private cropCategoryService:CropCategoryService, private cropAreaService:CropAreaService) { }

  ngOnInit(): void {
    this.getcropCategory();
    this.getArea(this.cropCategories);
  }

  getcropCategory(){
    this.cropCategoryService.getCropCategory()
    .subscribe(
      Response=>{
        this.cropCategories=Response
        this.filterCropCategories = this.cropCategories.filter(e=>e.rubberType==this.cropType);
        this.getArea(this.filterCropCategories);
        this.getCropArea(this.filterCropCategories)
      }
    )
  }

  add(){
    this.filterAreas = this.areas.filter(x=>x.area != null)
    this.cropAreaService.addCropArea(this.filterAreas)
    .subscribe(
      Response=>{
        swal.fire("Done!", "Crop information successfully saved!", "success");
        this.getCropArea(this.filterCropCategories);
      }
    )

  }

  getArea(cate:CropCategory[]){
    cate.forEach(x=>{
      let area:CropArea = {} as CropArea;
      area.year = '',
      area.area = null,
      area.cropCategoryId=x.id,
      this.areas.push(area);
    })  
  }

  getCropArea(cate:CropCategory[]){
    this.cropAreaService.getCropArea()
    .subscribe(
      Response=>{
        this.cropAreas=Response
        this.filterCropAreas = this.cropAreas.filter(e=>e.rubberType==this.cropType)
        this.sum(this.filterCropAreas)
      }
    )
  }

  sum(data:any)
  {
    this.value=data
    for(let j=0;j<data.length;j++){   
      this.total += this.value[j].area  
    }
  }

}
