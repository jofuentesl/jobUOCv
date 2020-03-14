import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  studiesForm: FormGroup = this.formBuilder.group({});
  update() {
  }

  ngOnInit(): void {
  }

}
