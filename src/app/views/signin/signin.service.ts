import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { DataService } from '../../shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  currentUser: User[] = [];

  constructor( private dataService:DataService) { }

  login({ email, password }) {
    const user = this.dataService.getUsers().subscribe(data => {
      this.currentUser = data;
      if(this.currentUser[0].email== email && this.currentUser[0].password== password){
        console.log("ostia puta");
      }else{
        console.log("mierda");
      }
    });
  }
} 
