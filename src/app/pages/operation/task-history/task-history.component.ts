import { Component, OnInit } from '@angular/core';
import { TaskDbService } from 'src/app/services/task-db.service';
import { TaskHistoryDbService } from 'src/app/services/task-history-db.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
  taskHistory: any = [];
  constructor(private taskHistorydbService: TaskHistoryDbService,
    private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.getTaskHistory();
  }

  getTaskHistory() {
    this.taskHistorydbService.getAll().subscribe((res: any) => {
      this.taskHistory = res;
    })
  }

  delete(history) {
    try {
      this.taskHistorydbService.delete(history.key);
      this.toastService.showSuccess(ToastMessage.DELETED);
      this.getTaskHistory();
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR);
    }
  }

  goHome() {
    this.router.navigate(["home"]);
  }
}
