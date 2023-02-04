import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FieldProduction } from '../_dataInterface/fieldProduction';

@Injectable({
  providedIn: 'root'
})
export class FieldProductionService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) {}

  getAllProductions():Observable<FieldProduction[]>{
    return this.http.get<FieldProduction[]>(this.baseUrl + '/fieldproductions');
  }

  addProduction(production:FieldProduction[]){
    // production.id=0;
    return this.http.post(this.baseUrl + '/fieldproductions', production);
  }

  getAllFields():Observable<FieldProduction[]>{
    return this.http.get<FieldProduction[]>(this.baseUrl + '/fieldproductions/fields');
  }
}
