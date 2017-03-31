import { Component, OnInit } from '@angular/core';
import { WhiskeysModule } from '../whiskeys/whiskeys.module';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
