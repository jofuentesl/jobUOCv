import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  currentUser: User;
  constructor( private dataService: DataService,
               private route: ActivatedRoute ) {  }

ngOnInit() {
  const user = this.dataService.getUsers().subscribe(data => {
    console.log(this.currentUser = data);
    });
  }
 }
