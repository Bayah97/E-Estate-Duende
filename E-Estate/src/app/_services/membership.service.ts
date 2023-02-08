import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MembershipType } from '../_dataInterface/membership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllMembership():Observable<MembershipType[]>{
    return this.http.get<MembershipType[]>(this.baseUrl + '/memberships');
  }
}
