import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private menuCtrl: MenuController
  ) {}
  // private menuCtrl: MenuController, private router:Router
//   MoreMenu(){
     
       
//     this.menuCtrl.open('More-Menu');
  
// }

toggleMenu(){
  console.log("toggle menu..");
  this.menuCtrl.open('first-menu');
}

loginuser():any{
  return JSON.parse(localStorage.getItem('login') || '{}')

 }

}
