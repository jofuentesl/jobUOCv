import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { DataService } from '../../shared/services/data.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  /*Variable para guardar datos usuario*/
  currentUser: User[] = [];

  /*Variables para validar el formulario de login*/
  email     = new FormControl('',[Validators.required])
  password  = new FormControl('',[Validators.required])

  loginForm: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password
  });

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  signin(){
    console.log(this.loginForm.value);
  }
  ngOnInit() {
    this.dataService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.currentUser = data;
    });
  }
}
