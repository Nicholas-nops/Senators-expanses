import { Pipe, PipeTransform } from '@angular/core';
import { SenatorsService } from './senators.service';

@Pipe({
  name: 'expenseType'
})
export class ExpenseTypePipe implements PipeTransform {

  constructor(private senatorsService : SenatorsService) {}
  
  transform(value: number){
    return this.senatorsService.formatType(value)
  }

}
