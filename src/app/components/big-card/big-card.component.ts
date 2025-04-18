import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./bigRespon.css']
})
export class BigCardComponent {
  
  
  
  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input() 
  cardDescription:string = ""

  @Input()
  id:string = "0"
  



}
