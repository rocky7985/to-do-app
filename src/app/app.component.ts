import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( 
    private menuCtrl: MenuController,   
    private router:Router    
  ){
    this.menuCtrl.enable(true,"MoreMenu");
  }
  //  private router:Router
//   MoreMenu(){
     
       
//     this.menuCtrl.open('More-Menu');
  
// }

// AddTask(){    this.router.navigate(['/addtask']);


// }

// profile(){
//   this.router.navigate(['/profile']); 

// }



//   logout() {
//     localStorage.removeItem('login');

//     this.router.navigate(['/login']);
//     console.log("Logout clicked");
//   }




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


}
  

