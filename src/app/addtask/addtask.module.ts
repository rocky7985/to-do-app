import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AddtaskPageRoutingModule } from './addtask-routing.module';

import { AddtaskPage } from './addtask.page';

const routes: Routes=[
  {
    path: '',
    component:AddtaskPage

  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtaskPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [AddtaskPage]
})
export class AddtaskPageModule {}
