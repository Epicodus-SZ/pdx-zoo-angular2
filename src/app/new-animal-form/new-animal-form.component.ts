import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-new-animal-form',
  templateUrl: './new-animal-form.component.html',
  styleUrls: ['./new-animal-form.component.css']
})
export class NewAnimalFormComponent implements OnInit {

  newAnimal: Animal = new Animal();
  mode: string = "new";
  @Input() viewMode: string;

  @Output()
  add: EventEmitter<Animal> = new EventEmitter();

  constructor() { }

  addAnimal() {
    this.add.emit(this.newAnimal);
    this.newAnimal = new Animal();
  }

  ngOnInit() {
  }
}
