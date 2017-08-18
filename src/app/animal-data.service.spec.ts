import { TestBed, inject } from '@angular/core/testing';
import { Animal } from './animal'
import { AnimalDataService } from './animal-data.service';

describe('AnimalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalDataService]
    });

  });

  it('should be created', inject([AnimalDataService], (service: AnimalDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllAnimals()', () => {


  it('Should return all animals', inject([AnimalDataService], (service: AnimalDataService) => {
    let animal1 = new Animal({
      species: "cat",
      name: "Ranger",
      age: 1,
      diet: "cat food",
      location: "Seattle",
      caretakers: 4,
      sex: "male",
      likes: "belly rubs",
      dislikes: "hot sauce"});
    let animal2 = new Animal({
      species: "cat",
      name: "Dallas",
      age: 1,
      diet: "cat food",
      location: "Seattle",
      caretakers: 4,
      sex: "female",
      likes: "lasers",
      dislikes: "loud noises"});
    service.addAnimal(animal1);
    service.addAnimal(animal2);
    expect(service.getAllAnimals().length).toEqual(7);
  }));

});

});
