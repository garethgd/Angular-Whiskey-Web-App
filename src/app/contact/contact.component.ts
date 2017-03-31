import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
   animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
