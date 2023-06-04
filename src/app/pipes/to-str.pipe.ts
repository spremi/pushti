import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStr'
})
export class ToStrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
