import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHex'
})
export class ToHexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
