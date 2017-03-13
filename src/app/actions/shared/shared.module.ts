import { NgModule } from '@angular/core';
import {WhiskeyLookupService } from './lookup/whiskey.service'
import { FormsFieldService } from './forms/fields/forms-field.service'
@NgModule({
    providers: [WhiskeyLookupService]
})

export class SharedModule{

}

