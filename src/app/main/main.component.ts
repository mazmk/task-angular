import { Component } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './table-view/table-view-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  showFiller = true;
  data: PeriodicElement[];
  constructor() {
    this.data = ELEMENT_DATA;
  }
  addElem(data: any) {
    console.log(data);
    this.data.push(data);
  }
}
