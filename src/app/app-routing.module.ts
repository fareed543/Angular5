import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { Component } from '@angular/core/src/metadata/directives';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'services',
    component : ServicesComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
