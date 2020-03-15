import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map} from 'rxjs/operators';
import { User } from '../models/user.model';
import { Study } from '../models/study.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*Variable para guardar datos usuario*/
  currentUser: User;
  currentStudy: Study;
  testUser: User[] = [];
  SERVER_URL = 'http://localhost:4200/api/';
  SERVER_URL2 = 'http://localhost:4200/api/users/';
  SERVER_URL3 = 'http://localhost:4200/api/users.studies'

  constructor(  private httpClient: HttpClient ) { }


  getUsers(): Observable<any> {
    return this.httpClient.get<any>(`${this.SERVER_URL}users`).pipe(tap(data =>
      this.currentUser = data)
    ); 
  }

  getUser(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.SERVER_URL2}` + id).pipe(tap(data =>
      this.currentUser = data)
    ); 
  }

  updateUser( user: any): Observable<any> {
    return this.httpClient.put<any>(`${this.SERVER_URL2}`, {...user}).pipe(
      map(() => user)
    );
  }

  getStudy( uid: any) {
  
  }
  
  deleteStudy(idUser:any, idStudy:any){

  }
  
}
