import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signup = new FormGroup({
    Name : new FormControl('',[Validators.required, Validators.minLength(3)]),
    Age : new FormControl(),
    Username : new FormControl('',[Validators.required, Validators.minLength(6)]),
    Password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    Address:new FormControl(),
    RefferalCode : new FormControl(),
    cabDriver : new FormControl()
  })

  errorMsgClass: string = "error";
}
