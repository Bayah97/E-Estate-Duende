import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establishment } from '../_dataInterface/establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getEstablishment():Observable<Establishment[]>{
    return this.http.get<Establishment[]>(this.baseUrl + '/establishments');
  }
}
