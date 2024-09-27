import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  searchTask:any=[];
  details: any = [];
  isReady: boolean = false;
  loggedInUser: any;
  student: any = [];
  selectedSegment: string = 'AllTasks';


  constructor(
    private router: Router,
    private alertController: AlertController

  ) { }

  ionViewWillEnter() {
    this.loggedInUser = JSON.parse(localStorage.getItem('login') || '');

    this.getdetails();
    this.showTask();
  }

  getdetails() {
    this.isReady = false;
    var detailsString: any = []
    detailsString = localStorage.getItem('login');
    this.details = JSON.parse(detailsString);
    this.isReady = true;
    console.log('Show details:', this.details);

  }

  showTask() {
    const studentTasks = JSON.parse(localStorage.getItem('alltask') || '');
    console.log('rgrgthtrh', studentTasks);

    this.student = [];

    if (this.loggedInUser.role === 'student') {

      studentTasks.forEach((element: any) => {
        const index = element.StudentRollNo.findIndex((rollno: any) => rollno == this.loggedInUser.RollNo);
        console.log('rgrgthtrh', index);
        if (index != -1) {
          this.student.push(element);
        }
      });
    }
    // studentTasks[index]

    console.log('Student tasks:', this.student);
  }



  async marktask(index: number) {

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to mark Task as Completed?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel Clicked');
        }
      },

      {
        text: 'Okay',
        handler: () => {
          console.log('index', index)

          const alltasks = JSON.parse(localStorage.getItem('alltask') || '[]');
          console.log('ghvvhj', alltasks);


          alltasks.forEach((task: any) => {
            console.log('task', task)
            if (task.TaskId === this.student[index].TaskId) {
              task.StudentRollNo.forEach((element: any) => {
                if (this.loggedInUser.RollNo == element) {
                  console.log('jhdfjhgfjhdgsfjhsgfjhsfsd', element)
                  if (!task.CompletedTask.includes(element)) {

                  task.CompletedTask.push(element);
                }
              }
              });

            }

          });

          localStorage.setItem('alltask', JSON.stringify(alltasks));
          this.showTask();
        }
      }
      ]
    });
    await alert.present();

  }

  search() {
    if (this.searchTask.replace(/\s/g, '') !== '') // checks all whitespaces and occurrences in the string
    {
      const filterTask = this.student.filter((s: any) => {
        return s.Title.toLowerCase().includes(this.searchTask.toLowerCase()) ||
          s.Description.toLowerCase().includes(this.searchTask.toLowerCase()) ||
          s.TeacherName.toLowerCase().includes(this.searchTask.toLowerCase()) 


      });
      this.student = filterTask;


    }
    else {
      this.showTask();
    }


  }



}