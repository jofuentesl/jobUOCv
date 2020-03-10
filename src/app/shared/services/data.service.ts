import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*Variable para guardar datos usuario*/
  currentUser: User[] = [];

  SERVER_URL = 'http://localhost:4200/api/';
  SERVER_URL2 = 'http://localhost:4200/api/users/';

  constructor( private httpClient: HttpClient ) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.SERVER_URL}users`).pipe(tap(data =>
      this.currentUser = data)
      ); }

  getUser(id: any): Observable<any> {
      return this.httpClient.get(`${this.SERVER_URL2}` + id).pipe(
          map(this.extractData));
      }
}
