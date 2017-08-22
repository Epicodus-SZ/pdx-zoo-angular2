import { TestBed, inject } from '@angular/core/testing';
import { Animal } from './animal'
import { AnimalDataService } from './animal-data.service';

describe('AnimalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalDataService]
    });

  });

  it('should instantiate correctly', inject([AnimalDataService], (service: AnimalDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllAnimals()', () => {
    it('Should return 7 animals', inject([AnimalDataService], (service: AnimalDataService) => {
      let animal6 = new Animal({
        name: "Ironman"});
      let animal7 = new Animal({
        name: "Batman"});
      service.addAnimal(animal6);
      service.addAnimal(animal7);
      expect(service.getAllAnimals().length).toEqual(7);
    }));
  });

  describe('addAnimal()', () => {
    it('Should add a new animal', inject([AnimalDataService], (service: AnimalDataService) => {
      let animal6 = new Animal({
        name: "Ironman"});
      service.addAnimal(animal6);
      expect(service.getAllAnimals()[5].name).toEqual("Ironman");
    }));

    it('Should properly increment id', inject([AnimalDataService], (service: AnimalDataService) => {
      let animal6 = new Animal({
        name: "Ironman"});
      service.addAnimal(animal6);
      expect(service.getAllAnimals()[5].id).toEqual(6);
    }));
  });

  describe('deleteAnimalById()', () => {
    it('Should delete animal with id 6', inject([AnimalDataService], (service: AnimalDataService) => {
      let animal6 = new Animal({
        name: "Ironman"});
      service.addAnimal(animal6);  
      service.deleteAnimalById(animal6.id); //line under test
      expect(service.getAllAnimals()).not.toContain(animal6);
      expect(service.getAllAnimals().length).toEqual(5);
    }));
  }); //end of deletebyID

  describe('updateAnimalById()', () => {
    it('Should update animal with a new animal', inject([AnimalDataService], (service: AnimalDataService) => {
      let newAnimal = new Animal({
        species: "Ironman-species",
        name: "Ironman",
        age: 1,
        diet: "Ironman-diet",
        location: "Ironman-location",
        caretakers: 4,
        sex: "Male",
        likes: "Ironman-like",
        dislikes: "Ironman-dislike"});
      let updatedAnimal = new Animal({
        species: "Hulk-species",
        name: "Hulk",
        age: 1,
        diet: "Hulk-diet",
        location: "Hulk-location",
        caretakers: 4,
        sex: "Male",
        likes: "Hulk-like",
        dislikes: "Hulk-dislike"});
      service.addAnimal(newAnimal);  
      service.updateAnimalById(newAnimal.id,updatedAnimal); //code under test
      let testedAnimal = service.getAnimalById(newAnimal.id);
      expect(testedAnimal.name).toEqual(updatedAnimal.name);
      expect(testedAnimal.species).toEqual(updatedAnimal.species);
      expect(testedAnimal.diet).toEqual(updatedAnimal.diet);
      expect(testedAnimal.location).toEqual(updatedAnimal.location);
      expect(testedAnimal.id).toEqual(newAnimal.id);
    }));
  }); //end of updateAnimalById

  describe('getAnimalById()', () => {
    it('Should return animal when passed a valid id', inject([AnimalDataService], (service: AnimalDataService) => {
      let newAnimal = new Animal({
        name: "Ironman"});
      service.addAnimal(newAnimal);

      let testAnimal = service.getAnimalById(newAnimal.id); //line under test
      expect(testAnimal.name).toEqual("Ironman");

      //Should add ability to check for invalid id
      
    }));
  }); //end of getAnimalById
  // Add more tests here


}); //end of Animal Data Service
