import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(args);

    return value.substring(0,50) + '...';
  }

}
