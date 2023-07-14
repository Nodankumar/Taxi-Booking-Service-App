import { ActivatedRoute } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.css']
})
export class BookingSuccessComponent {

  constructor(private route: ActivatedRoute) {

  }
  From:any;
  To:any;
  Name:any;
  vechicleNumber:any;
  vechicleModel:any;
  Rating:any;
  Fare: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const ob = params;
      //console.log(ob); // Use the `ob` value as needed
      this.From = ob['from'];
      this.To = ob['to'];
      this.Name = ob['driverName'];
      this.vechicleNumber=ob['vehicleNumber'];
      this.vechicleModel=ob['vehicleModel'];
      this.Rating = ob['driverRating'];
      this.Fare=ob['fare']
    });
  }



}
