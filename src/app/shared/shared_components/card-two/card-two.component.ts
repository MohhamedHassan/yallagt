import { Component, Input } from '@angular/core';
import { NewCars } from '../../models/new-cars';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent {
  @Input() card_two_Data!:NewCars
}
