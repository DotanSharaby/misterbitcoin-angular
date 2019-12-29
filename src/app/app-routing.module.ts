import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contacts',
    component: ContactPageComponent
  },
  {
    path: 'contact-add',
    component: ContactEditPageComponent
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditPageComponent
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsPageComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'statistics',
    component: StatisticPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }