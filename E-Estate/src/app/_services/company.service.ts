import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../_dataInterface/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCompany(): Observable<Company[]>{
    return this.http.get<Company[]>(this.baseUrl + '/companies');
  }

  getOneCompany(id:number):Observable<Company>{
    return this.http.get<Company>(this.baseUrl + '/companies/' + id)
  }
}
