import { Injectable } from '@angular/core';
import { Animal } from './Animal';
@Injectable()
export class AnimalDataService {

  lastId: number = 0;  //tracking id's of animals
  animals: Animal[] = []; //a zoo

  //Add some mock data
  constructor() {
    let animal1 = new Animal({
      species: "Arctic Fox",
      name: "Moon",
      age: 2,
      diet: "Carnivore",
      location: "Northern Trail",
      caretakers: 5,
      sex: "Female",
      likes: "Cool shade",
      dislikes: "Loud noises"});
    let animal2 = new Animal({
      species: "Ocelot",
      name: "Prince",
      age: 4,
      diet: "Carnivore",
      location: "Tropical Rain Forest Building",
      caretakers: 6,
      sex: "Male",
      likes: "Laying in the sunshine",
      dislikes: "Toys that are not rope-based"});
    let animal3 = new Animal({
      species: "Northwest Black Tailed Deer",
      name: "Tinkerbell",
      age: 8,
      diet: "Herbivore",
      location: "Northern Trail",
      caretakers: 2,
      sex: "Female",
      likes: "Delicate roots and leaves",
      dislikes: "Loud Noises"});
    this.addAnimal(animal1);
    this.addAnimal(animal2);
    this.addAnimal(animal3);
   }

  //Post method
  addAnimal(animal: Animal): AnimalDataService {
    if (!animal.id) {
      animal.id = ++this.lastId;
    }
    this.animals.push(animal);
    return this;
  }

    // DELETE /animals/:id
  deleteAnimalById(id: number): AnimalDataService {
    this.animals = this.animals
      .filter(animal => animal.id !== id);
    return this;
  }

  // PUT /animals/:id
  updateAnimalById(id: number, values: Object = {}): Animal {
    let animal = this.getAnimalById(id);
    if (!animal) {
      return null;
    }
    Object.assign(animal, values);
    return animal;
  }

  // GET /animals
  getAllAnimals(): Animal[] {
    return this.animals;
  }

  //  GET /animals/:id
  getAnimalById(id: number): Animal {
    return this.animals
      .filter(animal => animal.id === id)
      .pop();
  }
} // end of DataService Class
