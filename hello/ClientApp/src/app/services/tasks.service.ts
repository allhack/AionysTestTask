import { Injectable } from "@angular/core";
import { User } from "../core/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Task } from "../core/task";

@Injectable()
export class TasksService{
  
  private tasksSource = new BehaviorSubject<User>(null);
  currentUser = this.tasksSource.asObservable();

  changeTasks(user: User) {
    this.tasksSource.next(user);
    console.log(this.currentUser);
  }
}
