import { Component, OnInit, AfterContentInit } from "@angular/core";
import 'rxjs/Rx';
import { User } from "../core/user"
import { TasksService } from "../services/tasks.service";
import { FilterType } from "../core/filterEnum";
import { FilterService } from "../services/filter.service";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: []
})
export class UsersComponent implements OnInit {

  users: User[];
  filterString: string;
  filterOption: FilterType;

  constructor(private dataService: DataService, private tasksService: TasksService, private filterService: FilterService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe((users: User[]) => this.users = users);
    this.filterService.currentFilter.subscribe(filter => this.filterString = filter);
    this.filterService.currentOption.subscribe(opt => this.filterOption = opt);
  }

  onClick(user: User) {
    this.tasksService.changeTasks(user);
  }
}
