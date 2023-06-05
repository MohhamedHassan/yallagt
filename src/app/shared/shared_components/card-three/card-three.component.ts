import { Component, Input } from '@angular/core';
import { NewArrivals } from '../../models/new-arrivals';

@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.scss']
})
export class CardThreeComponent {
  @Input() card_tree_Data!:NewArrivals
}
