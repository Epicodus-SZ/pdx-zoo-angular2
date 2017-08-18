import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal';
@Component({
  selector: 'app-edit-animal-form',
  templateUrl: './edit-animal-form.component.html',
  styleUrls: ['./edit-animal-form.component.css']
})
export class EditAnimalFormComponent implements OnInit {

  @Input()
  animalToEdit: Animal;

  @Output()
  updateAnimal: EventEmitter<Animal> = new EventEmitter();

  constructor() {
  }

  onUpdateAnimal(animal: Animal) {
    this.updateAnimal.emit(animal);
  }

  ngOnInit() {
  }

}
