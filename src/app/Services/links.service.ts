import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Link from './types/Link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private _url: string = '/assets/data/links/links.json';
  constructor(private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this._url)
  }
}
