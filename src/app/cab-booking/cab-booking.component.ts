import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.css']
})
export class CabBookingComponent {

  constructor(private router: Router) { }

  driversAvailabele: any[] = [
    {
      "driverName": "R.Nodankumar",
      "vehicleNumber": "TS03-7278",
      "driverRating": "5",
      "vehicleModel": "Tata Nexon",
      "arrivalTime": "9:32 am",
      "duration": "43 mins",
      "fare": "450",
      "from": "Delhi",
      "to": "Gurugram",
      "imgAddress": "assets/images/myImg.jpg"
    },
    {
      "driverName": "Grogu",
      "vehicleNumber": "DL-CL6828",
      "driverRating": "5",
      "vehicleModel": "Swift",
      "arrivalTime": "9:35 am",
      "duration": "44 mins",
      "fare": "350",
      "from": "Gurugram",
      "to": "Noida",
      "imgAddress": "https://getwallpapers.com/wallpaper/full/2/a/e/1094460-new-taxi-driver-wallpapers-1920x1080.jpg"
    }

  ];


  navigateToBookingSuccess(ob: any) {
    this.router.navigate(['/booking-success'], { queryParams: ob });
  }

  cicularImages: boolean = true;


}
