import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  listFilter: string = "";

  @Input()
  animals: Animal[];

  @Output()
    removeAnimal: EventEmitter<Animal> = new EventEmitter();

    @Output()
    editAnimal: EventEmitter<Animal> = new EventEmitter();

    constructor() {
    }

    onRemoveAnimal(animal: Animal) {
      this.removeAnimal.emit(animal);
    }

    onEditAnimal(animal: Animal) {
      this.editAnimal.emit(animal);
    }

  onChange(optionFromMenu) {
    this.listFilter = optionFromMenu;
  }
  ngOnInit() {
  }

}
