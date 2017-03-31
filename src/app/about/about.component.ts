import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
   animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
