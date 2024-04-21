import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8281/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(utilisateur:any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', utilisateur);
  }
  register(utilisateur:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', utilisateur);
  }
}