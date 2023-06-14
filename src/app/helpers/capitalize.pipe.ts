import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const firstLetter = value.charAt(0).toUpperCase();
    const remainingLetters = value.slice(1);

    return firstLetter + remainingLetters;
  }
}
