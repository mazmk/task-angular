import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-shared-comp2',
  templateUrl: './shared-comp2.component.html',
  styleUrls: ['./shared-comp2.component.scss']
})
export class SharedComp2Component {
  val: string;
  constructor(private sharedService: SharedService) {
    sharedService.message.subscribe(data => this.val = data)
  }
}
