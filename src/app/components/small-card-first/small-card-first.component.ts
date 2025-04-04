import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-first',
  standalone: true,
  imports: [],
  templateUrl: './small-card-first.component.html',
  styleUrl: './small-card-first.component.css'
})
export class SmallCardFirstComponent {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input() 
  cardDescription:string = ""

}
