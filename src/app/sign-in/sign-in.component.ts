import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  
  signin = new FormGroup({
    Username : new FormControl('',[Validators.required, Validators.minLength(6)]),
    Password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  errorMsgClass: string = "error";

}
