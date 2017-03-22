import { Component, Input } from '@angular/core';
import { RestAPIService } from '../../shared/restapi.service';
import { WHISKEY_CAT } from '../whiskey-catalogue';
import { Whiskey } from '../../shared/whiskey/Whiskey';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
  selector: 'app-whiskey-details',
  templateUrl: './whiskey-details.component.html',
  styleUrls: ['./whiskey-details.component.css'],
    animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})

export class WhiskeyDetailsComponent {

  @Input()
  selectedWhiskey: Whiskey;
  rating: number;
  ratings = new Array();

  setRating() {
    this.ratings = new Array(this.rating);
  }


}








