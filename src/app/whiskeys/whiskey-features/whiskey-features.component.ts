import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
  selector: 'app-whiskey-features',
  templateUrl: './whiskey-features.component.html',
  styleUrls: ['./whiskey-features.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@fallIn]': '' }
})
export class WhiskeyFeaturesComponent implements OnInit {
 state: string ='';
  constructor() { }

  ngOnInit() {
  }

}
