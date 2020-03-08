import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { DataService } from '../../shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  currentUser: User[] = [];
  currentId: void[] = [];
  constructor( private dataService:DataService,
               private router:Router) { }

  login({ email, password }) {
    const user = this.dataService.getUsers().subscribe(data => {
      this.currentUser = data;
      if(this.currentUser.find(n => n.email== email && n.password == password )){

      this.router.navigate(['/admin/profile']);
      }else{
        alert("El usuario o la contraseña no son correctos")
      };
    });
  }
} 
