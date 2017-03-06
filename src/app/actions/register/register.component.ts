import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegistrationViewModel } from './registrationViewModel';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  @ViewChild("registrationForm") registrationForm: NgForm

  registrationViewModel: RegistrationViewModel

  ngAfterViewChecked(){
   this.formChanged();
  }


  constructor() {
    this.registrationViewModel = new RegistrationViewModel();
   }
   private formChanged()
   {
     if(this.registrationForm)
     {
       this.registrationForm.valueChanges.subscribe(data => this.onValueChanged(data))
     }
   }

   private onValueChanged(data? : any)
   {
    if(this.registrationForm)
    {
      const form = this.registrationForm.form;

      for(const property in this.formErrors)
      {
        this.formErrors[property] = '';
        const control = form.get(property);

        //Control is current form input 
        if (control && control.dirty && control.invalid)
        {
          const messages = this.validateMessages[property]

          for(const key in control.errors)
          {
            this.formErrors[property] += messages[key] + ' ';
          }
        }
      }
    }
   }

   private formErrors = {
     'firstName': '',
     'lastName': '',
     'email': '',
     'address': '',
     'dob': '',
     'country': '',
     'password' : ''
   };

   private validateMessages ={
     'firstName' : {
       'required' : 'First Name is Required.'

     },
     'lastName' : {
       'required' : 'Last Name is Required.'

     },
     'email' : {
       'required' : 'Email is Required.'

     },
     'address' : {
       'required' : 'Address is Required.'

     },
     'dob' : {
       'required' : 'Date of Birth is Required.'

     },
     'country' : {
       'required' : 'Country is Required.'

     },
     'password' : {
       'required' : 'Password is Required.'

     }
   }


// registerUser(fname, lname, email, phone , country , address, billingAddress, sameAddress ){
//     if(sameAddress == true)
//     {
//       billingAddress == sameAddress;
//     }
//   }
}
