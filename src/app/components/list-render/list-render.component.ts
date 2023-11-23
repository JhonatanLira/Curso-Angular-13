import { Animal } from './../../Animal';
import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';

//import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
animals: Animal[] =[];

animalDetail = '';

constructor(private listService:ListService){
  this.getAnimal();
}
showAge(animal: Animal){
 this.animalDetail =`Amimail ${animal.name} tem ${animal.age} anos`
}
removerAnimal(animal:Animal){
console.log('removendo animal...');
this.animals = this.listService.remove(this.animals,animal);
}
  getAnimal(): void{
    this.listService.getAll().subscribe((animals)=> (this.animals = animals) );
  }
}
