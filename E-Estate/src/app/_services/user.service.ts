import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_dataInterface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  formModel = this.fb.group({
    Username : ['',Validators.required],
    Email : ['',Validators.email],
    Fullname : [''],
    Role :[''],
    Passwords : this.fb.group({
      Password : ['',[Validators.required, Validators.minLength(5)]],
      ConfirmPassword: ['', Validators.required]
    }, 
    // {validator:this.comparePasswords}
    )
  });

  // comparePasswords(fb:FormBuilder){
  //   let confirmPassword = fb.control('ConfirmPassword');
  //   if(confirmPassword.errors == null ||'passwordMismatch' in confirmPassword.errors)
  //   {
  //     if(fb.control('Password').value != confirmPassword.value)
  //     confirmPassword.setErrors({passwordMismatch :true});
  //     else
  //     confirmPassword.setErrors(null);
  //   }
  // }

  register(){
    var body={
      userName: this.formModel.value.Username,
      email : this.formModel.value.Email,
      fullName : this.formModel.value.Fullname,
      role :this.formModel.value.Role,
      password : this.formModel.value.Passwords?.Password
    }
    return this.http.post(this.baseUrl + '/users/register', body )
  }

  login(formData:NgForm){
    return this.http.post(this.baseUrl + '/users/login', formData)
  }

  getUserProfile():Observable<User>{
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    return this.http.get<User>(this.baseUrl + '/userprofiles')
  }

  roleMatch(allowedRoles: any[]):boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(sessionStorage.getItem('token')!.split(".")[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(x => {
        if (userRole == x){
          isMatch=true;
          return false;
        }
        else{
          return isMatch
        }
    })
    return isMatch;
  }

  getWeather(){
    return this.http.get(this.baseUrl + '/weatherforecast');
  }
}
