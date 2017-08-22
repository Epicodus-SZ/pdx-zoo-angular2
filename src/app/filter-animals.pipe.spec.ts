import { FilterAnimalsPipe } from './filter-animals.pipe';
import { Animal } from './animal';

fdescribe('FilterAnimalsPipe', () => {
  let pipe: FilterAnimalsPipe; 
  // let animals: Animal[]; //a zoo 
  
  //Add some mock data
  let oneYear = new Animal({
    name: "Moon",
    age: 1});
  let twoYear = new Animal({
    name: "Prince",
    age: 2});
  let threeYear = new Animal({
    name: "Tinkerbell",
    age: 3});

  beforeEach(() => {
    pipe = new FilterAnimalsPipe();
  });

  it('providing no value returns fallback full set', () => {
    let animals = new Array<Animal>(); //a zoo    
    animals.push(oneYear);
    animals.push(twoYear);
    animals.push(threeYear);
    expect(pipe.transform(animals,"")).toEqual([oneYear,twoYear,threeYear]);
  });

  it("Filter 'young' returns oneYear only", () => {
    let animals = new Array<Animal>(); //a zoo    
    animals.push(oneYear);
    animals.push(twoYear);
    animals.push(threeYear);
    expect(pipe.transform(animals,"young")).toEqual([oneYear]);
  });

  it("Filter 'old' returns oneYear only", () => {
    let animals = new Array<Animal>(); //a zoo    
    animals.push(oneYear);
    animals.push(twoYear);
    animals.push(threeYear);
    expect(pipe.transform(animals,"old")).toEqual([twoYear, threeYear]);
  });

  it("Filter 'all' returns 1,2 and 3", () => {
    let animals = new Array<Animal>(); //a zoo    
    animals.push(oneYear);
    animals.push(twoYear);
    animals.push(threeYear);
    expect(pipe.transform(animals,"all")).toEqual([oneYear, twoYear, threeYear]);
  });
});
