import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, ServicesOfferedComponent],
  imports: [
    CommonModule,
    NguCarouselModule,
    CoreRoutingModule
  ],
  exports: [
    // HomeComponent, AboutComponent, ContactComponent, ServicesOfferedComponent
  ]
})
export class CoreModule { }
