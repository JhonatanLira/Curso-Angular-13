import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
//import { ListService } from 'src/app/services/list.service';
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

constructor(private listService:ListService){

}
showAge(animal: Animal){
 this.animalDetail =`Amimail ${animal.name} tem ${animal.age} anos`
}
removerAnimal(animal:Animal){
console.log('removendo animal...');
this.animals = this.listService.remove(this.animals,animal);
}
}
