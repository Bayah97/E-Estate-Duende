import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Town } from '../_dataInterface/town';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TownService {

  baseUrl = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  getTown():Observable<Town[]>{
    return this.http.get<Town[]>(this.baseUrl + '/towns');
  }

}
