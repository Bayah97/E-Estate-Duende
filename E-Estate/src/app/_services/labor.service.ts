import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labor } from '../_dataInterface/labor';

@Injectable({
  providedIn: 'root'
})
export class LaborService {

  baseUrl= environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllLabor():Observable<Labor[]>{
    return this.http.get<Labor[]>(this.baseUrl + '/labors');
  }

  addLabor(labor:Labor):Observable<Labor>{
    labor.id=0;
    return this.http.post<Labor>(this.baseUrl + '/labors', labor);
  }

  deleteLabor(id:number):Observable<Labor>{
    return this.http.delete<Labor>(this.baseUrl + '/labors/' + id);
  }

  
}
