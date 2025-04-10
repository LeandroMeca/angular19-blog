import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardFirstComponent } from "../../components/small-card-first/small-card-first.component";
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardFirstComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./homRespon.css']
})
export class HomeComponent{

  constructor(){

  }



}
