import { Component, OnInit, NgModule } from '@angular/core';
import { NavigationComponent } from '../../layout/navigation/navigation.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// registerUser(fname, lname, email, phone , country , address, billingAddress, sameAddress ){
//     if(sameAddress == true)
//     {
//       billingAddress == sameAddress;
//     }
//   }
}
