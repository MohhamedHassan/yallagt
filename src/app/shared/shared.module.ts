import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared_components/navbar/navbar.component';
import { CardOneComponent } from './shared_components/card-one/card-one.component';
import { TitleComponent } from './shared_components/title/title.component';
import { CardTwoComponent } from './shared_components/card-two/card-two.component';
import { CardThreeComponent } from './shared_components/card-three/card-three.component';
import { FooterComponent } from './shared_components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardOneComponent,
    TitleComponent,
    CardTwoComponent,
    CardThreeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardOneComponent,
    TitleComponent,
    CardTwoComponent,
    CardThreeComponent,
    FooterComponent
]
})
export class SharedModule { }
