import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

const routes: Routes=[
  {
    path: '',
    component:ProfilePage

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfilePageRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
