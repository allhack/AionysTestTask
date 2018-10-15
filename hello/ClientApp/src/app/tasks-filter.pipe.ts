import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './core/task';
import { User } from './core/user';

@Pipe({
  name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {
  transform(tasks: Task[], selectedUser: User) {
    return tasks.filter(t => t.userId == selectedUser.id);
  }
}
