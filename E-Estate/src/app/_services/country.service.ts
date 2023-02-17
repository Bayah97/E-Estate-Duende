import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../_dataInterface/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCountry():Observable<Country[]>
  {
    return this.http.get<Country[]>(this.baseUrl + '/countries')
  }
}
