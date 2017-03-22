import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { RegistrationViewModel } from './registrationViewModel';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})


export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  registrationViewModel: RegistrationViewModel;
  

    state: string ='';
    error: any;

  constructor(
    private fb: FormBuilder,
    public af: AngularFire,
    private router: Router
  ) {
    this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
    this.registrationViewModel = new RegistrationViewModel();
  }


  ngOnInit() {
    this.buildForm();
  }
onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
      
        this.router.navigate(['/members'])
      }).catch(
        (err) => {
      
        this.error = err;
      })
    }
  }

  submit() {
    this.registrationViewModel = this.registrationForm.value;
    console.log(JSON.stringify(this.registrationViewModel));
  }
  private buildForm() {
    this.registrationForm = this.fb.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'dob': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'password': ['', [Validators.required]],

    })
    this.registrationForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  private onValueChanged(data?: any) {
    if (!this.registrationForm) { return; }

    for (const property in this.formErrors) {
      this.formErrors[property] = '';
      const control = this.registrationForm.get(property);

      //Control is current form input 
      if (control && control.dirty && control.invalid) {
        const messages = this.validateMessages[property]

        for (const key in control.errors) {
          this.formErrors[property] += messages[key] + ' ';
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
    'password': ''
  };
  private validateMessages = {
    'firstName': {
      'required': 'First Name is Required.'

    },
    'lastName': {
      'required': 'Last Name is Required.'

    },
    'email': {
      'required': 'Email is Required.'

    },
    'address': {
      'required': 'Address is Required.'

    },
    'dob': {
      'required': 'Date of Birth is Required.'

    },
    'country': {
      'required': 'Country is Required.'

    },
    'password': {
      'required': 'Password is Required.'

    }
  }

}
