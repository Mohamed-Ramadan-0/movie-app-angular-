import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[],term:string): any[] {
    return data.filter(ele => ele.name.toLowerCase().includes(term.toLowerCase()))
  }

}
