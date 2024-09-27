import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { CommonServiceService } from 'src/app/common-service.service';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
})
export class AddtaskPage {

  taskdetails: any[] = [];
  Title: any;
  Description: any;
  CompletedTask:any=[];
  TaskId: any
  TeacherName: any;
  students: any[] = []
  selectedStudent: any[]=[];
  Teacher: any[] = [];
  detailform: any = [];
  teacherid: any;
  // MarkedCompleteTask:boolean=false;


  constructor(public CommonService: CommonServiceService) {
    this.loadStudents();
    this.taskdetails;
  }

  AddTask() {

    if (!this.selectedStudent) {
      console.error("No student selected to assign task to.");
      return;
    }

    // const teacherrole = localStorage.getItem('register')
    // this.Teacher = []
    // if (teacherrole) {
    //   const teachers = JSON.parse(teacherrole)
    //   teachers.forEach((teacher: any) => {
    //     if (teacher.role === 'teacher') {
    //       this.Teacher.push(teacher);
    //     }
    //   });
    // }

    const currrentSignInUser = JSON.parse(localStorage.getItem('login') || '[]');


    var newTask = {
      'Title': this.Title,
      'Description': this.Description,
      'StudentRollNo': this.selectedStudent,
      'TeacherName': currrentSignInUser.Name,
      'CompletedTask': [],
      'TaskId': this.TaskId,
      'teacherid': currrentSignInUser.teacherId,
      // 'MarkedCompleteTask':false
    };



    const Tasklist = localStorage.getItem('alltask');

    this.detailform = [];

    if (Tasklist !== null) {
      this.taskdetails = JSON.parse(Tasklist);

      if (currrentSignInUser.role === 'teacher') {
        this.taskdetails.forEach((list: any) => {
          if (list.teacherid === currrentSignInUser.teacherId) {
            this.detailform.push(list);
          }
        })
      }

      let existingTaskId = this.taskdetails.map(Task => Task.TaskId);
      const enteredTaskId = newTask.TaskId
      if (existingTaskId.includes(enteredTaskId)) {
        this.CommonService.presentToast("TaskId is already in use. Please choose a different TaskId.");
        return;
      }

      this.taskdetails.push(newTask);

    }

    
    else {
      this.taskdetails.push(newTask);
    }
    // if (!this.selectedStudent.length) {
    //   this.taskdetails.push(newTask);

    //   localStorage.setItem('alltask', JSON.stringify(this.taskdetails));

    // }
   
    localStorage.setItem('alltask', JSON.stringify(this.taskdetails));
    console.log('TaskAdded:', newTask);
    this.CommonService.presentToast("Task Added Successfully");
    this.resetFields();

  }

  resetFields() {
    this.Title = '';
    this.Description = '';
    this.CompletedTask = [];
    this.TaskId = '';
    this.selectedStudent=[];
    // this.MarkedCompleteTask=false;
  }




  loadStudents() {
    const studentsString = localStorage.getItem('register');
    this.students = [];
    if (studentsString) {
      const students = JSON.parse(studentsString!);
      students.forEach((student: any) => {
        if (student.role === 'student') {
          this.students.push(student);
        }
      });
      console.log('Assign', this.students);

    }
  }

}
