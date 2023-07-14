import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:SignUpComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'booking',component:CabBookingComponent},
  {path:'booking-success', component:BookingSuccessComponent},
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
