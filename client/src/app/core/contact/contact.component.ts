import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../shared/contact.service';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  firstName:string = '';
  lastName:string = '';
  emailId:string = '';
  phoneNumber:string = '';

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ContactService,
               ) {
      this.rForm = fb.group({
        firstName : new FormControl('', [Validators.required]),
        lastName : new FormControl('', [Validators.required]),
        phoneNumber : new FormControl('', [Validators.required]),
        emailId : new FormControl('', [Validators.required, Validators.email]),
        description : new FormControl(''),
    });
     }
     addPost(post)  {
      let ContactObject:any = {};
      ContactObject.description = post.description;
      ContactObject.firstName = post.firstName;
      ContactObject.lastName = post.lastName;
      ContactObject.phoneNumber = post.phoneNumber;
      ContactObject.emailId = post.emailId;
      this.description = post.description;
      this.firstName = post.firstName;
      this.lastName = post.lastName;
      this.phoneNumber = post.phoneNumber;
      this.emailId = post.emailId;
      this.service.postContactInfo(ContactObject);
      }

}
