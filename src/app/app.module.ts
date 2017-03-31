
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmailComponent } from '././actions/email/email.component';
import { LayoutModule } from './layout/layout.module';
import { FooterComponent } from './layout/footer/footer.component';
import { WhiskeysModule } from './whiskeys/whiskeys.module';
import { ActionsModule } from './actions/actions.module';
import { AppRoutingModule } from './app.routing';
import { ActionsRoutingModule } from './actions/actions.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from '././auth/auth.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const firebaseConfig = {
    apiKey: "AIzaSyA-gSKVNv4hbjk7WSO9qJV3hEWWJd_Zoug",
    authDomain: "angular-whiskey.firebaseapp.com",
    databaseURL: "https://angular-whiskey.firebaseio.com",
    storageBucket: "angular-whiskey.appspot.com",
    messagingSenderId: "409591642628"
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ProductsComponent,
    MembersComponent,
    AboutComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule,
    WhiskeysModule,
    ActionsModule,
    LayoutModule,
    ActionsRoutingModule,
    RouterModule,
  AngularFireModule.initializeApp(firebaseConfig)
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
