import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  exports : [
    MatButtonModule,
    MatCheckboxModule
  ]
  
})
export class MaterialModule { }
