import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, ServicesOfferedComponent],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports: [
    HomeComponent, AboutComponent, ContactComponent, ServicesOfferedComponent
  ]
})
export class CoreModule { }
