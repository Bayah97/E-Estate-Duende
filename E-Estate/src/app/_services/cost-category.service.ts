import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CostCategory } from '../_dataInterface/costCategory';

@Injectable({
  providedIn: 'root'
})
export class CostCategoryService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCostCategory():Observable<CostCategory[]>{
    return this.http.get<CostCategory[]>(this.baseUrl + '/costcategories')
  }
}
