import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private httpApi: ApiService) {

  }
  getJsonPlaceholder() {
    return this.httpApi.get()
  }
}
