import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
animals: Animal[] =[
  {name: "Turca",type:"dog", age:4},
  {name: "Tom",type:"cat",age:5},
  {name: "Frida",type:"dog",age:10},
  {name: "Ninho",type:"dog",age:1},
  {name: "Bob",type:"hourse",age:1}
];
animalDetail = '';
showAge(animal: Animal){
 this.animalDetail =`Amimail ${animal.name} tem ${animal.age} anos`
}
}
