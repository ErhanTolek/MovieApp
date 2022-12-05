import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { authBody, authResponse } from '../models/authResponse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken = "AIzaSyBsluIh2b1DRmX_MhEP3H-Zn2AdDlwmXtk"
  user = new BehaviorSubject<User>(null);
  constructor(private http : HttpClient) { }

  SignUp(email: string, password: string){
    return this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.authToken, {
      email : email,
      password : password,
      returnSecureToken : true
    }).pipe(
      tap(
        (response) =>{
        //   const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))
        //   const user = new User(
        //     response.email,
        //     response.localId,
        //     response.idToken,
        //     expirationDate
        //   );
        // this.user.next(user)
        this.AuthHandler(response.email, response.localId, response.idToken, +response.expiresIn)
        }
      )
    )
  }
  SignIn(email: string, password: string){
    return this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.authToken, {
      email : email,
      password : password,
      returnSecureToken : true
    }).pipe(
      tap(
        (response) =>{
        //   const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))
        //   const user = new User(
        //     response.email,
        //     response.localId,
        //     response.idToken,
        //     expirationDate
        //   );
        // this.user.next(user)
        this.AuthHandler(response.email, response.localId, response.idToken, +response.expiresIn)
        }
      )
    )
  }
  LogOut(){
    this.user.next(null);
    localStorage.removeItem("user");
  }

  AuthHandler(email: string, localId: string, idToken: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000))
    const user = new User(
      email,
      localId,
      idToken,
      expirationDate
    );
    this.user.next(user)
    localStorage.setItem("user", JSON.stringify(user))

  }

  AutoLogin(){
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(!savedUser){
      return;
    }
    const user = new User(
      savedUser.email,
      savedUser.id,
      savedUser._token,
      new Date(savedUser._tokenExpirationDate)
    );
    if(user.token){
      this.user.next(user)
    }
    
    
    

  }
}