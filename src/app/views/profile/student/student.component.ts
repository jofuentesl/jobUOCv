import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  /*Variables para validar el formulario de login*/
    name     = new FormControl('',[Validators.required])
    surename  = new FormControl('',[Validators.required])
    
    userForm: FormGroup = this.formBuilder.group({
      name: this.name,
      surename: this.surename
    });
  
  constructor(private formBuilder: FormBuilder) { }

    update(){
      console.log("hola");
    }

  ngOnInit(): void {
  }

}
