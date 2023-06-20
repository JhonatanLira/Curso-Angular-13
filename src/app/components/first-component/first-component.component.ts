import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{

  name : String = "Jhonatan";
  idade :number = 35;
  cidade = "Cabo Frio";
  hobbies = ["Mangá","música","academia"];

constructor() {}

ngOnInit(): void{}

}
