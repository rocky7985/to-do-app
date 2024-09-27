import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {
  searchTask: string = '';
  assignedDetails: any = [];
  selectedSegment: string = 'AllTasks';
  teachertask: any = [];
  CompletedCount = 0;
  PendingCount = 0;
  teacher: any = [];

  constructor(    private alertController:AlertController
  ) {
    this.AssignedTaskDetails();
  }

  ionViewWillEnter() {

    this.AssignedTaskDetails(
    );
  }

  AssignedTaskDetails() {
    this.assignedDetails = [];
    // this.teachertask = [];
    let storedDetails = JSON.parse(localStorage.getItem('alltask') || '[]');
    const signInUser = JSON.parse(localStorage.getItem('login') || '{}');
    if (signInUser.role === 'teacher') {
      storedDetails.forEach((t: any) => {
        if (t.teacherid == signInUser.teacherId) {
          // this.CompletedCount = t.CompletedTask.length;
          // this.PendingCount = t.StudentRollNo.length - t.CompletedTask.length;
          // console.log('CompletedCount',this.CompletedCount)
          // console.log('PendingCount',this.PendingCount)
          this.assignedDetails.push(t);

        }

      });
      console.log('Student tasks:', this.assignedDetails);
    } else {
      console.log('Taskdetails not Valid');


    }
  }

  search() {
    if (this.searchTask.replace(/\s/g, '') !== '') // checks all whitespaces and occurrences in the string
    {
      const filterTask = this.assignedDetails.filter((s: any) => {
        return s.Title.toLowerCase().includes(this.searchTask.toLowerCase()) ||
          s.Description.toLowerCase().includes(this.searchTask.toLowerCase())

      });
      this.assignedDetails = filterTask;

    }
    else {
      this.AssignedTaskDetails();
    }


  }

  
    async deletedetails(cleardetails: any) {
      console.log('Delete details:', cleardetails)
  const alert = await this.alertController.create({
    header:'Confirm!',
    message:'Are you sure you want to delete task?',
    buttons:[
      {
        text:'Cancel',
        role:'Cancel',
        cssClass:'Secondary',
        handler:()=>{
          console.log('Cancel Clicked');
        }
  
      },{
        text:'Okay',
        handler:()=>{
          const index= this.assignedDetails.findIndex((d:any)=> d==cleardetails)
          if(index!==-1){
            this.assignedDetails.splice(index,1)
            localStorage.setItem('alltask', JSON.stringify(this.assignedDetails));
          }
  }
      }]
    });
  await alert.present();
    }
  }