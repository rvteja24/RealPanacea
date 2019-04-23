import { NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { ContactService } from '../shared/contact.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { CommonSharedModule } from '../common-shared/common-shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesOfferedComponent
  ],
  imports: [
    NguCarouselModule,
    CommonSharedModule,
    CoreRoutingModule
  ],
  exports: [
    // HomeComponent, 
    // AboutComponent, 
    // ContactComponent, 
    // ServicesOfferedComponent
  ],
  providers: [ContactService]
})
export class CoreModule { }
