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

  images = [
        'assets/whiskey-food.jpg',
        'https://hd.unsplash.com/photo-1471109880861-75a04f9b7833',
        'https://hd.unsplash.com/photo-1431400445088-1750c997c6b5'
    ];

  constructor() { }

  ngOnInit() {
  }

}
