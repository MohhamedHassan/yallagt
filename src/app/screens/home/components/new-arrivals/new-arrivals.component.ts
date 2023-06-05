import { Component, OnInit } from '@angular/core'
import { NewArrivals } from 'src/app/shared/models/new-arrivals'

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {
  new_arrivals:NewArrivals[] = []
  ngOnInit(): void {
    for (let i = 0;i<8; i++) {
      this.new_arrivals.push({
        img:'assets/images/xpngegg 1.png',
        brand:'porterfield',
        p1:'Porterfield R4-S Break Pad Made fore korean cars',
        h3:'KIA Cerato (2013 - 2018)',
        price1:'5,698',
        price2:'5,698',
        persentrg:'15% OFF',
      })
    }
  }
}
