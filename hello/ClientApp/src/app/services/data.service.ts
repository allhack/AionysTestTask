import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/user';
import { Task } from '../core/task';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get<User[]>('api/users');
  }

  getTasks() {
    return this.http.get<Task[]>('api/tasks');
  }

  deleteTask(id: number) {
    return this.http.delete('api/tasks/' + id);
  }

  addTask(task: Task) {
    return this.http.post('api/tasks', task);
  }
}
