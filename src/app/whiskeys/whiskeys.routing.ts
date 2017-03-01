import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WhiskeyListComponent } from '././whiskey-list/whiskey-list.component';
import { WhiskeyFeaturesComponent } from '././whiskey-features/whiskey-features.component';

const routes: Routes = [

    {
        path: 'whiskeys',
        component: WhiskeyListComponent
    },

    {
        path:'whiskeyfeatures',
        component:WhiskeyFeaturesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WhiskeysRoutingModule { }




