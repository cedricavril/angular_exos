import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAge'
})
export class FilterByAgePipe implements PipeTransform {

  transform(valueList: any, age: number = 0): any {
    return valueList.filter((valueItem) => {
      return valueItem.age > age;
    });
  }
}
