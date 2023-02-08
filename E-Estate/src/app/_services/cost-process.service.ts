import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CostProcess } from '../_dataInterface/costProcess';

@Injectable({
  providedIn: 'root'
})
export class CostProcessService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getCostProcess():Observable<CostProcess[]>{
    return this.http.get<CostProcess[]>(this.baseUrl + '/processcost')
  }

  addCostProcess(costProcess:CostProcess):Observable<CostProcess>{
    return this.http.post<CostProcess>(this.baseUrl + '/processcost', costProcess)
  }
}
