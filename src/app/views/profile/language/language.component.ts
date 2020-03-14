import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  currentUser: User;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    const user = this.dataService.getUsers().subscribe(data => {
      this.currentUser = data;
    });
  }
}
