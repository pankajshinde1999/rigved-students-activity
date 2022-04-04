import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'gen'
})
export class CustomPipe implements PipeTransform {
 
  transform(name: string, gender: string): string {
    if (gender == "male")
        return "Mr. " + name;
    else
        return "Miss. " + name;
  }
}