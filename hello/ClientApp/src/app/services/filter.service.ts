import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FilterType } from '../core/filterEnum';

@Injectable()
export class FilterService {
  //for sharing filter string
  private filterStrSrc = new BehaviorSubject<string>("");
  currentFilter = this.filterStrSrc.asObservable();

  //for sharing selected filter option
  private filterOption = new BehaviorSubject<FilterType>(null);
  currentOption = this.filterOption.asObservable();

  changeFilterString(str: string) {
    this.filterStrSrc.next(str);
  }

  changeFilterOption(opt: FilterType) {
    this.filterOption.next(opt);
  }
}
