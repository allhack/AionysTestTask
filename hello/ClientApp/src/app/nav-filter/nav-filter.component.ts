import { Component, OnInit } from '@angular/core';
import { FilterType } from '../core/filterEnum';
import { FilterService } from '../services/filter.service';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './nav-filter.component.html',
})
export class NavFilterComponent implements OnInit{
  filterOptions = FilterType;
  filterType: FilterType;
  filterString = "";

  constructor(private filterService: FilterService) {

  }

  ngOnInit() {
    this.filterService.currentFilter.subscribe(filter => this.filterString = filter);
    this.filterService.currentOption.subscribe(opt => this.filterType = opt);
  }

  onInputChanged() {
    this.filterService.changeFilterString(this.filterString);
  }

  onOptionChanged(filtType: FilterType) {
    this.filterService.changeFilterOption(filtType);
    console.log(filtType);
  }
}
