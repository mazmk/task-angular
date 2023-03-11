import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _message: BehaviorSubject<any> = new BehaviorSubject('');
  message: Observable<any> = this._message.asObservable();

  constructor() { }

  setMessage(value: any) {
    this._message.next(value)
  }
}
