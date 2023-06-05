import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarLinks = [
    {
      icon:'assets/images/icons8-home-500 1.png',
      name:'',
      class:'home_icon_and_flag home_icon'
    },
    {
      icon:'',
      name:'NEW PRODUCTS'
    },
    {
      icon:'',
      name:'NEW CARS'
    },
    {
      icon:'',
      name:'Used cars'
    },
    {
      icon:'',
      name:'Car rent'
    },
    {
      icon:'assets/images/60995 8.png',
      name:'Oils',
      class:'img_15px'
    },
    {
      icon:'',
      name:'About us'
    },
    {
      icon:'',
      name:'Contact'
    },
  ]
  showNavbar =false
}
