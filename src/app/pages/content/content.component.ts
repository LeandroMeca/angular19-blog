import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  @Input()
  photoCover:string = "";
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription:string = ""


  constructor(){}


  ngOnInit(): void {
   
  }


}
