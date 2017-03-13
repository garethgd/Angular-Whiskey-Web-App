import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
const routes: Routes = [

    
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login-email',
        component: EmailComponent
    },
    {

        path: 'login',
        component: LoginComponent
    },
   

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActionsRoutingModule { }