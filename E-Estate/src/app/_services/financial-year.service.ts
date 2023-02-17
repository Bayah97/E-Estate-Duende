import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FinancialYear } from '../_dataInterface/financialYear';

@Injectable({
  providedIn: 'root'
})
export class FinancialYearService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllFinancialYear():Observable<FinancialYear[]>{
    return this.http.get<FinancialYear[]>(this.baseUrl + '/financialyears');
  }
}
