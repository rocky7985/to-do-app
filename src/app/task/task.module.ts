import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPage

  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
