import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { link } from './types/link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private _url: string = '/assets/data/links/links.json';
  constructor(private http: HttpClient) { }

  getLinks(): Observable<link[]> {
    return this.http.get<link[]>(this._url)
  }
}
