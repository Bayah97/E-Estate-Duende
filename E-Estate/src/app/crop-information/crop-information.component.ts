import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CropArea } from '../_dataInterface/cropArea';

@Component({
  selector: 'app-crop-information',
  templateUrl: './crop-information.component.html',
  styleUrls: ['./crop-information.component.css']
})
export class CropInformationComponent implements OnInit {

  startYear = new Date().getFullYear();
  selectYear !: string;

  constructor() { }

  ngOnInit(): void {
    this.selectYear=this.startYear.toString();
  }

  yearSelected(year:string)
  {
    this.selectYear=year;
  }

}
