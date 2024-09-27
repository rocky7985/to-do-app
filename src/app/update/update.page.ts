import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage {
  updateForm: FormGroup;
  userDetails: any;
  constructor(
    public navCtrl: NavController,
    public CommonService: CommonServiceService,
    private fb: FormBuilder
  ) {

    this.updateForm = new FormGroup({
      role: new FormControl('teacher', Validators.required),
      Name: new FormControl('', Validators.required),
      RollNo: new FormControl(''),
      Phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      // allsubject: new FormArray([],Validators.required),
      allsubject: this.fb.array([], Validators.required),

    });
  }

  ionViewWillEnter() {

    this.userDetails = JSON.parse(localStorage.getItem('login') || '[]');
    this.updateForm.patchValue(this.userDetails);
    // Initialize subjects array
    const subjects = this.userDetails.allsubject || [];
    const allsubjectFormArray = this.updateForm.get('allsubject') as FormArray;
    allsubjectFormArray.clear();
    subjects.forEach((s: any) => {
      console.log('dsdfdf', s)

      allsubjectFormArray.push(this.fb.group({ subject: s.subject }));
      //  console.log('fdgnyyjy', allsubjectFormArray);
    });

  }



  get subjectControls() {
    return (this.updateForm.get('allsubject') as FormArray).controls;
  }

  newSubject(): FormGroup {
    return this.fb.group({
      subject: ['', Validators.required]
    });
  }

  addSubject() {
    const addsubjectArray = this.updateForm.get('allsubject') as FormArray;
    if (addsubjectArray.length < 5) {
      addsubjectArray.push(this.newSubject());
    }
    else {
      this.CommonService.presentAlert('Alert', 'You can add a maximum of 5 subjects.');
    }


  }




  removeSubject(i: number) {
    const removesubjectArray = this.updateForm.get('allsubject') as FormArray;
    if (removesubjectArray.length > 0) {
      removesubjectArray.removeAt(i);
    }
  }






  updateuser() {
    console.log('dbdvnkjvnfvjoio', this.updateForm.value)

    let customerDetails = JSON.parse(localStorage.getItem('register') || '[]');
    const userEmail = this.userDetails.email;


    const customerIndex = customerDetails.findIndex((c: any) => c.email === userEmail);
    if (customerIndex !== -1) {

      customerDetails[customerIndex] = this.updateForm.value;
      localStorage.setItem('register', JSON.stringify(customerDetails));
    }
    localStorage.setItem('login', JSON.stringify(this.updateForm.value));

    this.CommonService.presentAlert('Success', 'User details updated successfully!');
  }



}

