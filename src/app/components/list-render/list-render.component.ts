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
  this.animals = this.animals.filter((a)=> animal.name !== a.name);
 this.listService.remove(animal.id).subscribe();
}
  getAnimal(): void{
    this.listService.getAll().subscribe((animals)=> (this.animals = animals) );
  }
}
