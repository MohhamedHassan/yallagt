import { Component } from '@angular/core';
import { CarsForRent } from 'src/app/shared/models/cars-for-rent';
import { NewCars } from 'src/app/shared/models/new-cars';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.scss']
})
export class NewCarsComponent {
  newCars:NewCars[]=[
    {
      img:'assets/images/1+2021-audi-s3 1.png',
      h3:"Kia Cerato 2023",
      p1:"550,000 LE",
      feature1:'Heliopolis, Egypt',
      feature2:'4 days ago',
      feature3:'210,000 km',
      feature4:'Automatic',
    },
    {
      img:'assets/images/1+2021-audi-s3 1.png',
      h3:"Kia Cerato 2023",
      p1:"550,000 LE",
      feature1:'Heliopolis, Egypt',
      feature2:'4 days ago',
      feature3:'210,000 km',
      feature4:'Automatic',
    },
    {
      img:'assets/images/1+2021-audi-s3 1.png',
      h3:"Kia Cerato 2023",
      p1:"550,000 LE",
      feature1:'Heliopolis, Egypt',
      feature2:'4 days ago',
      feature3:'210,000 km',
      feature4:'Automatic',
    },
    {
      img:'assets/images/1+2021-audi-s3 1.png',
      h3:"Kia Cerato 2023",
      p1:"550,000 LE",
      feature1:'Heliopolis, Egypt',
      feature2:'4 days ago',
      feature3:'210,000 km',
      feature4:'Automatic',
    }
  ]
}
