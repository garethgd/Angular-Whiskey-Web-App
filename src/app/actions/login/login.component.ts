
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFire, private router: Router) {
    //IF authorised redirecto to members page
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginTwitter() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }


  ngOnInit() {
  }

}
