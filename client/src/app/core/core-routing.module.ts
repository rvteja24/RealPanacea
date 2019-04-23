import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'services', component: ServicesOfferedComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class CoreRoutingModule { }
