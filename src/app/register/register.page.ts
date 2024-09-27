import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/common-service.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(public CommonService: CommonServiceService) {
    this.registerForm = new FormGroup({
      role: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      RollNo: new FormControl(''),
      email: new FormControl('', Validators.required),
      Phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      Address: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },{ validators: this.PasswordMatchValidator });
  }

  //  PasswordMatchValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const password = control.get('password');
  //     const confirmPassword = control.get('confirmPassword');
  
  //     return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
  //   };
  // }
  PasswordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };



    } else {
      control.get('confirmPassword')?.setErrors(null);
      return null;

    }
  }
  register() {
    if (this.registerForm.valid) {
      if(this.registerForm.value.role === 'teacher')
        {
        this.registerForm.value.teacherId = Math.floor(Math.random() * 100)
      }

      let getForm = localStorage.getItem('register');
      let myform = getForm ? JSON.parse(getForm) : [];

      let existingEmails = myform.map((entry:any) => entry.email);
      const enteredEmail = this.registerForm.value.email;
      if (existingEmails.includes(enteredEmail)) {
        this.CommonService.presentToast("Email is already in use. Please choose a different email.");
        return;
      }

      if (this.registerForm.value.role === 'student') {
        let existingRollNo = myform.map((entry:any) => entry.RollNo);
        const enteredRollNo = this.registerForm.value.RollNo;
        if (existingRollNo.includes(enteredRollNo)) {
          this.CommonService.presentToast("RollNo is already in use. Please choose a different RollNo");
          return;
        }
      }

      myform.push(this.registerForm.value);
      localStorage.setItem("register", JSON.stringify(myform));
      console.log("Form submitted:", this.registerForm.value);
      this.CommonService.presentToast("Registration Successful");
    } else {
      console.log("Form errors:", this.registerForm.errors); 

      this.CommonService.presentToast('Form is invalid. Cannot submit.');
    }
  }
}

// , [Validators.required, Validators.minLength(2), Validators.maxLength(2)]