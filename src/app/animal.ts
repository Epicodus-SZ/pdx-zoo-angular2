export class Animal {
  id: number;
  species: string;
  name: string;
  age: number;
  diet: string;
  location: string;
  caretakers: number;
  sex: string;
  likes: string;
  dislikes: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
