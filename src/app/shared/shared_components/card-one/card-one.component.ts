import { Component, Input } from '@angular/core';
import { CarsForRent } from '../../models/cars-for-rent';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent {
  @Input() card_one_Data!:CarsForRent
}
