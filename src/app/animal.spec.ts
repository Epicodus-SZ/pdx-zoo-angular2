import {Animal} from './animal';

describe('Animal', () => {
  it('should create an instance', () => {
    expect(new Animal()).toBeTruthy();
  });
});

it('should create a new animal using the constructor', () => {
  let animal = new Animal({
    name: "Hugo"
  });  //end of instance
  expect(animal.name).toEqual('Hugo');
})
