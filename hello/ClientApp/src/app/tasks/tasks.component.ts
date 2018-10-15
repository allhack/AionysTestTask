import { Component, OnInit } from "@angular/core";
import { TasksService } from "../services/tasks.service";
import { User } from "../core/user";
import { Task } from "../core/task";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  selectedUser: User;
  createMode: boolean = false;
  newTask: Task = new Task();

  constructor(private tasksService: TasksService, private dataService: DataService) {

  }

  ngOnInit() {
    this.loadTasks();
    this.tasksService.currentUser.subscribe(user => { this.selectedUser = user; this.cancel(); });
  }

  delete(task: Task) {
    this.dataService.deleteTask(task.id).subscribe(data => this.loadTasks());
  }

  loadTasks() {
    this.dataService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  create() {
    this.newTask = new Task();
    this.newTask.userId = this.selectedUser.id;
    this.createMode = true;
  }

  save() {
    this.dataService.addTask(this.newTask).subscribe(data => this.loadTasks());
    this.createMode = false;
  }

  cancel() {
    this.newTask = new Task();
    this.createMode = false;
  }
}
