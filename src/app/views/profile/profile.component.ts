import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { User } from '../../shared/models/user.model';
import { FakeBackendService } from '../../shared/inmemory-db/inmemory-db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User[] = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    const user = this.dataService.getUsers().subscribe(data => {
      this.currentUser = data;

      /*return this.currentUser.map(res => { res });*/
    }
  ); }
}
