import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, WebStorageStateStore } from 'oidc-client';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_dataInterface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  manager: UserManager;
  user:any;

  constructor() { 
    this.manager = new UserManager(getClientSettings());
  }

  isLoggedIn(){
    let x = localStorage.getItem(environment.localStorage);
    if(x != null){
      return this.user != null;
    }
    else{
      return false;
    }
  }

  startAuthentication=()=>{   
    return this.manager.signinRedirect();
  } 

  completeAuthentication(){
    return this.manager.signinRedirectCallback()
    .then(user => {
      this.user = user;
      this.setToken(this.user.access_token);
      this.setRefreshToken(this.user.refresh_token);
      return user;
    })    
  }

  setToken(token:string){
    localStorage.setItem('AccessToken', token);
    return;
  }

  setRefreshToken(token:string){
    localStorage.setItem('RefreshToken', token);
  }

  setProfile():Observable<User>
  {
    return of (this.user.profile);
  }

  startLogOut(): Promise<void> {
    return this.manager.signoutRedirect();
  }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  
  refreshToken(){
    return this.manager.signinSilent()
      .then(user => {
        return user.access_token
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      //Identity Server host
      authority: 'https://localhost:5001',
      client_id: environment.clientId,
      client_secret:environment.client_secret,
      redirect_uri: environment.redirectUri,
      response_type:"code",
      scope:"openid profile api1 role offline_access",
      userStore: new WebStorageStateStore({ store: window.localStorage })
};
}
