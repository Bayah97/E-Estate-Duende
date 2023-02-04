import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CostProcess } from 'src/app/_dataInterface/costProcess';
import { CostProcessService } from 'src/app/_services/cost-process.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.css']
})
export class ProcessInfoComponent implements OnInit {

  process:CostProcess={} as CostProcess;

  constructor(private costProcessService:CostProcessService, 
    private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  submit(){
    this.process.costCategoryId=1;
    this.costProcessService.addCostProcess(this.process)
    .subscribe(
      Response=>{
        swal.fire("Done!", "Process Name successfully submitted!", "success");
        this.dialogRef.closeAll();
      }
    )
  }

}
