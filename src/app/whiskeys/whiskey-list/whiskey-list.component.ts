import { Component, OnInit } from '@angular/core';
import { WHISKEY_CAT } from '../whiskey-catalogue';
import { Whiskey } from '../../shared/whiskey/Whiskey';
import { RestAPIService } from '../../shared/restapi.service';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
  selector: 'app-whiskey-list',
  templateUrl: './whiskey-list.component.html',
  styleUrls: ['./whiskey-list.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class WhiskeyListComponent implements OnInit {
  whiskeyCat: Whiskey[];
  selectedWhiskey : Whiskey;
  state: string ='';
  constructor(private apiService: RestAPIService) { }

  ngOnInit() {
    this.whiskeyCat = this.apiService.getWhiskeyCat();
  }


  setSelectedWhiskey(selectedWhiskey : Whiskey)
  {
    this.selectedWhiskey = selectedWhiskey;
  }

  
}



