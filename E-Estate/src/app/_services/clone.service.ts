import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clone } from '../_dataInterface/clone';

@Injectable({
  providedIn: 'root'
})
export class CloneService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getClone():Observable<Clone[]>{
    return this.http.get<Clone[]>(this.baseUrl + '/clones')
  }
}
