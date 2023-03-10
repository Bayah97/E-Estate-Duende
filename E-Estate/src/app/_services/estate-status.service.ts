import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstateStatus } from '../_dataInterface/EstateStatus';

@Injectable({
  providedIn: 'root'
})
export class EstateStatusService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  addEstateStatus(estateStatus:EstateStatus):Observable<EstateStatus>{
    return this.http.post<EstateStatus>(this.baseUrl + '/estateStatus', estateStatus)
  }
  
}
