import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent} from './core/contact/contact.component';
import { AboutComponent} from './core/about/about.component';
import { ServicesOfferedComponent} from './core/services-offered/services-offered.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'contactUs', component: ContactComponent, pathMatch: 'full' },
  {path: 'aboutUs', component: AboutComponent, pathMatch: 'full' },
  {path: 'services', component: ServicesOfferedComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
