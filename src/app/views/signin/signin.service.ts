import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { DataService } from '../../shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  currentUser: User[] = [];
  constructor( private dataService: DataService,
               private router: Router ) { }

  login({ email, password }) {
    const user = this.dataService.getUsers().subscribe(data => {
      this.currentUser = data;
      if(this.currentUser.find(n => n.email === email && n.password === password )){
      /*this.currentUser.find(n => { if (n.email === email && n.password === password ) {*/
        sessionStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        return this.router.navigate(['/admin/profile'/*, n.id*/] );
      } else {
        alert('Usuario o contraseña equivocadas');
        this.router.navigate(['']);
      }
    });
  }
}