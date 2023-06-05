import { Component } from '@angular/core';
import { CarsForRent } from 'src/app/shared/models/cars-for-rent';

@Component({
  selector: 'app-cars-for-rent',
  templateUrl: './cars-for-rent.component.html',
  styleUrls: ['./cars-for-rent.component.scss']
})
export class CarsForRentComponent {
  cars_for_rent:CarsForRent[]=[
    {
      img:'assets/images/2022 hyundai tucson sel white(1) 1.png',
      h3:"hyundai tucson 2023",
      p1:"1,500 LE",
      p2:"Per day"
    },
    {
      img:'assets/images/360-elantra-cn7-2021-08 1.png',
      h3:"hyundai elantra 2023",
      p1:"750 LE",
      p2:"Per day"
    },
    {
      img:'assets/images/2022 hyundai tucson sel white(1) 1.png',
      h3:"Mercedes c180 2017",
      p1:"1,000 LE",
      p2:"Per day"
    }
  ]
}
