import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Field } from '../_dataInterface/field';

@Injectable({
  providedIn: 'root'
})
export class FieldsInfoService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllFields():Observable<Field[]>{
    return this.http.get<Field[]>(this.baseUrl + '/fieldsinfo');
  }

  addField(field:Field):Observable<Field>{
    field.id=0;
    return this.http.post<Field>(this.baseUrl + '/fieldsinfo', field);
  }

  getOneField(id:number):Observable<Field>{
    return this.http.get<Field>(this.baseUrl + '/fieldsinfo/' + id);
  }

  updateField(field:Field):Observable<Field>{
    return this.http.put<Field>(this.baseUrl + '/fieldsinfo/' + field.id, field);
  }
  
}
