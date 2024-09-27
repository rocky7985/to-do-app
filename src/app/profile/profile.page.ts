import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

 
  userDetails: any = [];

  constructor() {

    this.loadUserDetails();
  }

  ionViewWillEnter(){
    console.log('kdjfhjdfkgjhdgkjhdkfg')
    this.loadUserDetails();

  }

  loadUserDetails() {
   
      let userDetails = localStorage.getItem('login');
      

      if (userDetails) {
        this.userDetails = JSON.parse(userDetails);
        console.log('User details saved:', this.userDetails);
      } else {
        console.log('Profile form is not valid. User details not saved.');
      }


  }
  // profileForm: any


}




