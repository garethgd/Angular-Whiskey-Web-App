import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '././actions/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [


     {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'products',
        component: ProductsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
   

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }