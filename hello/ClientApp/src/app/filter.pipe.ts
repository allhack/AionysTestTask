import { Pipe, PipeTransform } from "@angular/core";
import { FilterType } from "./core/filterEnum";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, param: FilterType, term: string) {
    if (term) {
      if (param === FilterType.firstName) {
          return users.filter((user) => { return user.firstName.toLowerCase().includes(term.toLowerCase()); });
      } else if (param === FilterType.city) {
          return users.filter((user) => { return user.address.city.toLowerCase().includes(term.toLowerCase()); });
        } else {
          return users;
        }
      } else {
        return users;
      }
    }

}
