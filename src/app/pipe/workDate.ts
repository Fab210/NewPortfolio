import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'workDate'
})

//**-- check witch Work Is The Present Work --**//

export class WorkDatePipe implements PipeTransform {
  transform(items: Array<any>): Array<any> {
    let i
    for (i = 0; i < items.length; i++) {
      if (items[i].isCurrentRole == true) {
        items[i].endDate = 'Present'
      }
    };
    
    return items;
  }
}
