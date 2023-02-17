import { Component, Input, OnInit } from '@angular/core';
import { CropArea } from 'src/app/_dataInterface/cropArea';
import { CropCategory } from 'src/app/_dataInterface/cropCategory';
import { CropAreaService } from 'src/app/_services/crop-area.service';
import { CropCategoryService } from 'src/app/_services/crop-category.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-immature-rubber',
  templateUrl: './immature-rubber.component.html',
  styleUrls: ['./immature-rubber.component.css']
})
export class ImmatureRubberComponent implements OnInit {

  cropCategories:CropCategory[]=[];
  filterCropCategories:CropCategory[]=[];
  filterCategoryId:CropCategory[]=[];
  cropType='Immature Rubber';

  areas:CropArea[]=[]
  cropAreas:CropArea[]=[]
  filterCropAreas:CropArea[]=[]
  cropArea ={} as CropArea;

  filterAreas:any;
  total=0;
  value:any;
  term='';

  constructor(private cropCategoryService:CropCategoryService, private cropAreaService:CropAreaService) { }

  ngOnInit(): void {
    this.getcropCategory(this.filterCropAreas.map(x=>x.cropCategoryId));
    this.getArea(this.cropCategories);
  }

  getcropCategory(cropArea:number[]){
    this.cropCategoryService.getCropCategory()
    .subscribe(
      Response=>{
        this.cropCategories=Response;
        this.filterCropCategories = this.cropCategories.filter(e=>e.rubberType==this.cropType);
        // this.filterCategoryId = this.filterCropCategories.filter(x=> {return !cropArea.includes(x.id)})
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
        // this.getcropCategory(this.filterCropAreas.map(x=>x.cropCategoryId));
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
