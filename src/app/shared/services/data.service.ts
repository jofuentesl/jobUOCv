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

  constructor( private httpClient: HttpClient ) { }

  getUsers():Observable<any[]> {
    return this.httpClient.get<any[]>(this.SERVER_URL+ 'users').pipe(tap(data =>
      this.currentUser = data)
      );
      
    }
}