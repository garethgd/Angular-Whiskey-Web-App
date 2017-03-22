import { Component, OnInit, Input } from '@angular/core';
import { Whiskey } from '../../shared/whiskey/Whiskey';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';
@Component({
  selector: 'app-whiskey-edit',
  templateUrl: './whiskey-edit.component.html',
  styleUrls: ['./whiskey-edit.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})



export class WhiskeyEditComponent implements OnInit {

  @Input()
  selectedWhiskey: Whiskey;
  
  saveWhiskey() {
    this.selectedWhiskey = null;
    console.log(this.selectedWhiskey);
  }
  ngOnInit() {
  }

}
