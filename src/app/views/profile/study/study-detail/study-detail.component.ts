import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { User } from '../../../../shared/models/user.model';
import { Study } from '../../../../shared/models/study.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-study-detail',
  templateUrl: './study-detail.component.html',
  styleUrls: ['./study-detail.component.scss']
})
export class StudyDetailComponent implements OnInit {

  currentUser: User;
  currentStudy: Study;

  title = new FormControl('', [Validators.required]);

  studyForm: FormGroup = this.formBuilder.group({
    title: this.title
  });

  constructor(  private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder,
                ) { }

  getSuty(){
    const idStudy = this.route.snapshot.paramMap.get('uid');
  }
  updateStudy(){
    const idStudy = this.route.snapshot.paramMap.get('uid');
  }
  addStudy(){
  }

  deleteStudy(){
    const idStudy = this.route.snapshot.paramMap.get('uid');
  }

  ngOnInit(): void {
  
  }
}
