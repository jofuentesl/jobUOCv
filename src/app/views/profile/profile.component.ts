import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User[] = [];
  currentUsers: User[] = [];
  constructor( private dataService: DataService,
               private route: ActivatedRoute ) { }

 
ngOnInit() {
    const idUser = this.route.snapshot.paramMap.get('id');
    const user = this.dataService.getUsers().subscribe(data => {
      this.currentUser = data;
      const userunique =  this.dataService.getUser(idUser).subscribe(data => {
      this.currentUsers = data;
    });
    }
  ); }
 }