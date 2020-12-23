
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'empNameCity',

})
export class EmployeeSearchPipe implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {
    if (!employees) return [];
    if (!searchText) return employees;
    searchText = searchText.toLowerCase();
    return employees.filter(employee => {
      return employee.name.toLowerCase().includes(searchText);
    });
  }



}