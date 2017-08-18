import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'filterAnimals'
})

export class FilterAnimalsPipe implements PipeTransform {

  transform(input: Animal[], filter) {
    var output: Animal[] = [];
    if(filter === "old") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (filter === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input; // no filter
    }

  }

}
