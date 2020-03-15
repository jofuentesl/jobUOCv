import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  currentUser: User;
  
  constructor( private dataService: DataService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const user = this.dataService.getUsers().subscribe(data => {
      console.log(this.currentUser = data);
      });
  }

}
