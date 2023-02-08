import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CostCategory } from '../_dataInterface/costCategory';
import { CostProcess } from '../_dataInterface/costProcess';
import { CostCategoryService } from '../_services/cost-category.service';
import { CostProcessService } from '../_services/cost-process.service';
import { ProcessInfoComponent } from './process-info/process-info.component';

@Component({
  selector: 'app-cost-info',
  templateUrl: './cost-info.component.html',
  styleUrls: ['./cost-info.component.css']
})
export class CostInfoComponent implements OnInit {

  costCategory:CostCategory[]=[];
  costCategory1:CostCategory[]=[];
  costCategoryAll:CostCategory[]=[];
  costProcess:CostProcess[]=[];


  constructor(private dialogRef: MatDialog, private costCategoryService:CostCategoryService,
    private costProcessService:CostProcessService) { }

  ngOnInit(): void {
    this.getCostCategory();
    this.getCostProcess();
  }

  openDialog(){
    this.dialogRef.open(ProcessInfoComponent);
    // this.dialogRef.afterAllClosed().subscribe(result=>{
    // location.reload();
    // })
}

  getCostCategory(){
    this.costCategoryService.getCostCategory()
    .subscribe(
      Response=>{
        this.costCategory=Response;
        this.costCategory1 = this.costCategory.filter(x=>x.id == 1)
        this.costCategoryAll = this.costCategory.filter(x=>x.id != 1)
      }
    )
  }

  getCostProcess(){
    this.costProcessService.getCostProcess()
    .subscribe(
      Response=>{
        this.costProcess = Response;

      }
    )
  }

}
