import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '././actions/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from '././actions/login/login.component';
import { HomeComponent } from './home/home.component';

import { AppComponent } from './app.component';
import { MembersComponent } from '././members/members.component';
import { AuthGuard } from '././auth/auth.service';

import { EmailComponent } from '././actions/email/email.component';

const routes: Routes = [


    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
     { 
        path: 'login-email', 
        component: EmailComponent 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'members', component: MembersComponent, canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
    
   


]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


