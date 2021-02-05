import { Component, OnInit } from '@angular/core';
import { TaskDbService } from 'src/app/services/task-db.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { TaskHistoryDbService } from 'src/app/services/task-history-db.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any = [];
  loading: boolean = false;
  constructor(private taskdbService: TaskDbService,
    private router: Router,
    private toastService: ToastService,
    private taskHistoryDbService: TaskHistoryDbService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  async getTasks() {
    this.taskdbService.getAll().subscribe((res: any) => {
      this.tasks = res;
    }, error => {
    })
  }

  select(task) {
    this.router.navigate(["task", task.key])
  }

  finish(task) {
    this.loading = true;
    let able = false;
    for (let day of task.value.daysOfWeek) {
      if (day.value === new Date().getDay() && day.checked) {
        able = true;
        break;
      }
    }
    if (able) {
      this.loading = false;
      try {
        this.taskHistoryDbService.insert({
          task_key: task.key,
          task: task.value,
          date: new Date().getTime()
        });
        this.toastService.showSuccess(ToastMessage.TASK_HISTORY_SUCCES);
      } catch (e) {
        this.toastService.showError(ToastMessage.ERROR);
      }
    } else {
      this.loading = false;
      this.toastService.showWarning("You can't do this");
    }
  }

  goHome() {
    this.router.navigate(["home"]);
  }

}
