import { Component, Input } from '@angular/core';
import { RestAPIService } from '../../shared/restapi.service';
import { WHISKEY_CAT } from '../whiskey-catalogue';
import { Whiskey } from '../../shared/whiskey/Whiskey';

@Component({
  selector: 'app-whiskey-details',
  templateUrl: './whiskey-details.component.html',
  styleUrls: ['./whiskey-details.component.css']
})

export class WhiskeyDetailsComponent {
  @Input()
  selectedWhiskey: Whiskey;
}







