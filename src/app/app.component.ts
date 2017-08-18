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

  viewMode: string = "new";

  newAnimal: Animal = new Animal();
  animalToEdit: Animal = null;

  constructor(private animalDataService: AnimalDataService){
  }

  onAddAnimal(animal: Animal) {
    this.animalDataService.addAnimal(animal);
  }

  removeAnimal(animal) {
    this.animalDataService.deleteAnimalById(animal.id);
  }

  updateAnimal(animal) {
    // this.animalDataService.updateAnimalById(animal.id,this.animalToEdit);
    this.viewMode = "new";
    this.animalToEdit = null;
  }

  editAnimal(animal) {
    this.viewMode = "edit";
    this.animalToEdit = animal;
  }

  get animals() {
    return this.animalDataService.getAllAnimals();
  }

}
