import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent ],
  imports: [
    CommonModule, BrowserModule, RouterModule, HttpModule
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule { }
