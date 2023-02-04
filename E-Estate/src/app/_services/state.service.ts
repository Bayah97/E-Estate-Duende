import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { State } from '../_dataInterface/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  baseUrl=environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  getState():Observable<State[]>{
    return this.http.get<State[]>(this.baseUrl + '/states')
  }
}
