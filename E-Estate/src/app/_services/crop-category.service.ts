import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CropCategory } from '../_dataInterface/cropCategory';

@Injectable({
  providedIn: 'root'
})
export class CropCategoryService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCropCategory():Observable<CropCategory[]>{
    return this.http.get<CropCategory[]>(this.baseUrl + '/cropcategories')
  }
}
