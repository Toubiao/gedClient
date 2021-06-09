import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {  } from 'rxjs';
// @ts-ignore
import * as moment from 'moment';
import {shareReplay, tap} from "rxjs/operators";
import {Document} from "../model/document";

const BASEURL = "http://157.26.82.44:2240/document/";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient) {
  }

  login(username:string, password:string ) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded;'
    );
    const body = 'grant_type=password&username=' + username + '&password=' + password;
    return this.http.post<any>('http://157.26.82.44:2240/token', body,{headers: headers })
    .pipe(tap(res => this.setSession));
  }
  getDocumentDisplay(docId:string){
    const lastRouteElem = "display"
    var routeApi = `${BASEURL}${docId}/${lastRouteElem}`;
    return this.http.get<Document>(routeApi);
  }
  getDocumentMetaData(docId:string){
    const lastRouteElem = "metadata"
    var routeApi = `${BASEURL}${docId}/${lastRouteElem}`;
    return this.http.get(routeApi);
  }

  public setSession(authResult:any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
