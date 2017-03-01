import { Component, OnInit, Input } from '@angular/core';
import { Whiskey } from '../../shared/whiskey/Whiskey';

@Component({
  selector: 'app-whiskey-edit',
  templateUrl: './whiskey-edit.component.html',
  styleUrls: ['./whiskey-edit.component.css']
})



export class WhiskeyEditComponent implements OnInit {

 @Input() 
selectedWhiskey : Whiskey;

  ngOnInit() {
  }

}
