import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CropArea } from '../_dataInterface/cropArea';

@Injectable({
  providedIn: 'root'
})
export class CropAreaService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCropArea():Observable<CropArea[]>{
    return this.http.get<CropArea[]>(this.baseUrl + '/cropareas')
  }

  addCropArea(cropArea:CropArea[]){
    return this.http.post(this.baseUrl + '/cropareas', cropArea);
  }
}
