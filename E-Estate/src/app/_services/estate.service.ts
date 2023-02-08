import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estate } from '../_dataInterface/estate';


@Injectable({
  providedIn: 'root'
})
export class EstateService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  //get all estate
  getAllEstates(): Observable<Estate[]>{
    return this.http.get<Estate[]>(this.baseUrl + '/estates');
  }

  addEstate(estate:Estate):Observable<Estate>{
    estate.id=0;
    return this.http.post<Estate>(this.baseUrl + '/estates', estate);
  }

  getOneEstate(id:number):Observable<Estate>{
    return this.http.get<Estate>(this.baseUrl + '/estates/' + id);
  }

  updateEstate(estate:Estate):Observable<Estate>{
    return this.http.put<Estate>(this.baseUrl + '/estates/' + estate.id, estate);
  }

  updateStatus(estate:Estate):Observable<Estate>{
    return this.http.put<Estate>(this.baseUrl + '/estates/' , estate);
  }

}
