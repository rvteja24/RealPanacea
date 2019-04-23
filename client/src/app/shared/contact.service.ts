import {Injectable} from '@angular/core';
import {Headers, Response} from '@angular/http';
import {Http} from '@angular/http';


@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  postContactInfo(contactObject: any): void {
    // const url = '/api/contact';
    // this.http.post(url,JSON.stringify(contactObject)).subscribe();
  }
}
