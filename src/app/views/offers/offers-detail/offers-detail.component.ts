import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { Offer } from '../../../shared/models/offer.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent implements OnInit {

  currentOffer: Offer;

  constructor(  private dataService: DataService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
      const idOffer= this.route.snapshot.paramMap.get('id');
      this.dataService.getOffer( idOffer ).subscribe(data=> {
       console.log(this.currentOffer=data);
      });
  }

}
