import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/common.module';
import { WhiskeysRoutingModule } from './whiskeys.routing';
import { WhiskeyDetailsComponent } from './whiskey-details/whiskey-details.component';
import { WhiskeyListComponent } from './whiskey-list/whiskey-list.component';
import { WhiskeyFeaturesComponent } from './whiskey-features/whiskey-features.component';
import { WhiskeyEditComponent } from './whiskey-edit/whiskey-edit.component';

@NgModule({
        imports: [BrowserModule, FormsModule, SharedModule, WhiskeysRoutingModule],
        declarations: [WhiskeyListComponent, WhiskeyDetailsComponent, WhiskeyListComponent, WhiskeyFeaturesComponent, WhiskeyEditComponent],
        exports: [WhiskeyListComponent, WhiskeyDetailsComponent,WhiskeyListComponent, WhiskeyFeaturesComponent]
    }
)

export class WhiskeysModule {}
