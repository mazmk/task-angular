import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = 'https://jsonplaceholder.typicode.com/todos'
  }
  get(id: string | number = '', options: any = {}): Observable<any> {
    const url = id ? `${this.baseURL}/${id}` : this.baseURL;
    return this.http.get(url, options)
  }
}
