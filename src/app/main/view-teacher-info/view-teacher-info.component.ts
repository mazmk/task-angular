import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { PeriodicElement } from '../table-view/table-view-data';

@Component({
  selector: 'app-view-teacher-info',
  templateUrl: './view-teacher-info.component.html',
  styleUrls: ['./view-teacher-info.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ViewTeacherInfoComponent implements OnInit {
  @Output() closeDetails = new EventEmitter<string>();

  @Input() item: PeriodicElement | any; // = ''; // decorate the property with @Input()
  private wasInside = false;
  public text: String;
  @HostListener('click')
  clickInside() {
    this.text = 'clicked inside';
    this.wasInside = true;
    this.evaluateDetailsView();
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.wasInside = false;
      this.text = 'clicked outside';
    } else {
      this.wasInside = true;
      this.text = 'clicked inside';
    }
    this.evaluateDetailsView();
  }

  evaluateDetailsView() {
    console.log(this.text, ', was inside: ', this.wasInside);
    if (this.text === 'clicked outside' && !this.wasInside) {
      this.closeDetails.emit('clicked outside');
    }
  }

  ngOnInit(): void {
    console.log(this.item);
  }
}
