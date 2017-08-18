import { Injectable } from '@angular/core';
import { Animal } from './Animal';
@Injectable()
export class AnimalDataService {

  lastId: number = 0;  //tracking id's of animals
  animals: Animal[] = []; //a zoo
  constructor() { }

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
