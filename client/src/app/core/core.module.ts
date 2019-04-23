import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { NguCarouselModule } from '@ngu/carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactService} from '../shared/contact.service';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, ServicesOfferedComponent],
  imports: [
    CommonModule,
    NguCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
  ],
  exports: [
    HomeComponent, AboutComponent, ContactComponent, ServicesOfferedComponent
  ],
  providers: [ContactService]
})
export class CoreModule { }
