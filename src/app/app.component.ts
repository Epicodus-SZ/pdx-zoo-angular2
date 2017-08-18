import { Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalDataService } from './animal-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimalDataService]
})
export class AppComponent {
  title = 'app';

  newAnimal: Animal = new Animal();

  constructor(private animalDataService: AnimalDataService){
  }

  addAnimal() {
    this.animalDataService.addAnimal(this.newAnimal);
    this.newAnimal = new Animal();
  }

  removeAnimal(animal) {
    this.animalDataService.deleteAnimalById(animal.id);
  }

  get animals() {
    return this.animalDataService.getAllAnimals();
  }


}
