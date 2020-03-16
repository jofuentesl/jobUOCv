import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Offer } from '../../shared/models/offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  currentOffer: Offer;

  constructor( private dataService: DataService) { }
  
  
  
  ngOnInit() {
    this.dataService.getOffers().subscribe(data => {
      this.currentOffer = data;
      
    });
  }
}


