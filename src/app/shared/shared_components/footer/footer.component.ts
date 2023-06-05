import { Component } from '@angular/core';
interface footer {
  title:string;
  links:string[]
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerData:footer[] = [
    {
      title:'our offers',
      links:[
        'Specials',
        'New products',
        'Bestsellers',
        'Contact us'
      ]
    },
    {
      title:'Information',
      links:[
        'Delivery',
        'Legal Notice',
        'Terms and conditions of use',
        'Contact us'
      ]
    },
    {
      title:'My account',
      links:[
        'My orders',
        'Payment',
        'My addresses',
        'My cars'
      ]
    },
    {
      title:'Contact us',
      links:[
        'My Company, 42 Puffin street 12345 Puffinville, Egypt',
        'Tel: 0111-012-0316',
        'Email: sales@yourcompany.com'
      ]
    }
  ]
}
