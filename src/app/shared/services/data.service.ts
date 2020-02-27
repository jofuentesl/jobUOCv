import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  SERVER_URL = 'http://localhost:4200/api/';

  constructor( private httpClient: HttpClient ) { }

  public getUsers() {
    return this.httpClient.get(this.SERVER_URL + 'users');
  }
}
