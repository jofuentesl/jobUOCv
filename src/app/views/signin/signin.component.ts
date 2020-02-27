import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  currentUser: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.currentUser = data;
    });
  }

}
