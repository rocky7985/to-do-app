import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
// import{LoginPage} from 'src/app/login.page';


@Component({
  selector: 'app-moremenu',
  templateUrl: './moremenu.page.html',
  styleUrls: ['./moremenu.page.scss'],
})
export class MoremenuPage  {

  constructor( private router:Router, 
    private menuCtrl: MenuController) { }
    MoreMenu(){
     
       
      this.menuCtrl.open('More-Menu');
    
  }
  
  AddTask(){    this.router.navigate(['/addtask']);
  
  
  }
  
  profile(){
    this.router.navigate(['/profile']); 
  
  }
  
  
  
    logout() {
      localStorage.removeItem('login');

      this.router.navigate(['/login']);
      console.log("Logout clicked");

    
    }
   loggedInUser():any{
    return JSON.parse(localStorage.getItem('login') || '{}')

   }  
       
      
  }
    
  
