import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card-first',
  standalone: true,
  imports: [RouterLink],
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
  
  @Input() 
  id:string = "0";


}
