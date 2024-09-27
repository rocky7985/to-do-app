import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

const routes: Routes=[
  {
    path: '',
    component:HomePage

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
