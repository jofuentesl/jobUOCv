import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { SigninService } from './signin.service';
import { User } from '../../shared/models/user.model';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

/*Expresión regular para verificar el email*/

function isEmail(input: FormControl) {
  const expresion = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
  return (expresion.test(input.value)) ? null : {validateEmail: true} ;
}


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  currentUser: User[] = [];

  /*Variables para validar el formulario de login*/
  email     = new FormControl('', [Validators.required, isEmail]);
  password  = new FormControl('', [Validators.required]);

  loginForm: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password
  });

  constructor(private dataService: DataService,
              private signinService: SigninService,
              private formBuilder: FormBuilder) { }
  signin() {
    this.signinService.login({...this.loginForm.value });
    }
  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any[]) => {
      console.log(data);
      this.currentUser = data;
      return this.currentUser.map(res => {console.log(res.email); });
      });
  }
}
