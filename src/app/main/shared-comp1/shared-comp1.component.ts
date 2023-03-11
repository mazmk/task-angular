import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-shared-comp1',
  templateUrl: './shared-comp1.component.html',
  styleUrls: ['./shared-comp1.component.scss']
})
export class SharedComp1Component {
  val: string;
  constructor(private sharedService: SharedService) {
    // sharedService.message.subscribe(data => this.val = data)
  }
  submit(event: any) {
    event.preventDefault();
    this.sharedService.setMessage(this.val);
  }
  updateVal() {
    this.sharedService.setMessage(this.val);
  }
}
