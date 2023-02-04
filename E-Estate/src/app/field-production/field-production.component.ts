import { Component, OnInit } from '@angular/core';
import { Field } from '../_dataInterface/field';
import { FieldProduction } from '../_dataInterface/fieldProduction';
import { FieldsInfoService } from '../_services/field-info.service';
import { FieldProductionService } from '../_services/field-production.service';
import swal from 'sweetalert2'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-field-production',
  templateUrl: './field-production.component.html',
  styleUrls: ['./field-production.component.css']
})
export class FieldProductionComponent implements OnInit {

  previousMonth=new Date();
  Date:any;

  products:FieldProduction[]=[];
  productions:FieldProduction[]=[];
  cuplumpDry:FieldProduction[]=[];
  latexDry:FieldProduction[]=[];
  totalDry:FieldProduction[]=[];
  totalEstateProduction:FieldProduction[]=[];

  field:FieldProduction[]=[];
  fields:Field[]=[];
  filterProductions:FieldProduction[]=[];
  filterfield={};

  value:any;
  cuplump:any;
  latex:any;
  total:any;
  totalEstateProductitivity=0;


  constructor(private productionService:FieldProductionService, private fieldService:FieldsInfoService,
    private datePipe:DatePipe) {
   }

  ngOnInit(): void {
    this.previousMonth.setMonth(this.previousMonth.getMonth()-1)
    this.Date = this.datePipe.transform(this.previousMonth, 'MMM-yyyy')
    this.getAllProduction();
    this.getAllField();
  }

  monthSelected(month:string){
    let monthDate = new Date(month);
    this.Date = this.datePipe.transform(monthDate, 'MMM-yyyy')
    this.products.forEach(y=>y.monthYear = this.datePipe.transform(monthDate, 'MMM-yyyy'))
    this.totalEstateProductitivity=0;
    this.getAllProduction();
  }

  getAllProduction(){
    this.productionService.getAllProductions()
    .subscribe(
      Response=>{
        this.productions=Response
        this.filterProductions=this.productions.filter(e => e.monthYear == this.Date)
        this.calculateCuplumpDry(this.filterProductions, this.cuplumpDry);
        this.calculateLatexDry(this.filterProductions, this.latexDry, this.totalDry);
      }
    )
  }

  calculateCuplumpDry(data:any, cuplump:any)
  {
    this.value=data
    this.cuplump=cuplump
    for(let j=0;j<data.length;j++){   
      this.cuplump[j] = this.value[j].cuplump*(this.value[j].cuplumpDRC/100)
    }
  }

  calculateLatexDry(data:any, latex:any, total:any)
  {
    this.value=data
    this.latex=latex
    this.total=total
    for(let j=0;j<data.length;j++){   
      this.latex[j] = this.value[j].latex*(this.value[j].latexDRC/100)
      this.total[j] = this.cuplump[j]+this.latex[j]
      this.totalEstateProductitivity += total[j]
    }
  }

  add(){
    this.productionService.addProduction(this.products)
    .subscribe(
      Response=>{
        swal.fire("Done!", "Field Production information successfully submitted!", "success");
        this.getAllProduction();
      }
    )
  }

  getAllField(){
    this.fieldService.getAllFields()
    .subscribe(
      Response=>{
        this.fields=Response;
        this.getProducts(Response);
      }
    )
  }

  getProducts(Fields:Field[]){
      Fields.forEach(x => {
      let product:FieldProduction = {} as FieldProduction;
      product.cuplump = null,
      product.cuplumpDRC= null,
      product.latex= null,
      product.latexDRC= null,
      product.noTaskTap= null,
      product.noTaskUntap= null,
      product.fieldId=x.id,
      product.monthYear = this.datePipe.transform(this.previousMonth , "MMM-yyyy")
      this.products.push(product);
    });
  }
}
