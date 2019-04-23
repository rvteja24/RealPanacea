import { NgModule } from '@angular/core';
import { CommonSharedModule } from '../common-shared/common-shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonSharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
