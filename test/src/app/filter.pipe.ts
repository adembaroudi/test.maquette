import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], Search: string): any {
    if (Search === '' || Search === null || Search === undefined) {
    return value;
    }
    // return  value.filter(p => (p.name.includes(Search)));
    return value .filter(p => (p.name.startsWith(Search)));
  }

}
