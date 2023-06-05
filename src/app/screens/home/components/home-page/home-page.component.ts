import { Component, OnInit } from '@angular/core';
import { CarsForRent } from 'src/app/shared/models/cars-for-rent';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    ngOnInit(): void {
      let nav = document.querySelector('nav')
      let header:any = document.querySelector('header')
      header.style.minHeight = `calc(100vh - ${nav?.scrollHeight}px)`
    }
}
