import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) { }

  postContactInfo(contactObject: any): void {
    // const url = '/api/contact';
    // this.http.post(url,JSON.stringify(contactObject)).subscribe();
  }
}
