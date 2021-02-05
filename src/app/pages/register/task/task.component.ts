import { Component, OnInit } from '@angular/core';
import { DateUtilService } from 'src/app/services/date-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskDbService } from 'src/app/services/task-db.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  daysOfWeek: any = [];
  task: any = null;
  id: string;
  constructor(private dateUtil: DateUtilService, private router: Router,
    private taskdbService: TaskDbService, private route: ActivatedRoute,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.checkParams();
  }

  checkParams() {
    this.route.params.subscribe(params => {
      this.getById(params['id']);
    });
  }

  getById(id) {
    if (id !== "0") {
      this.taskdbService.getByKey(id).subscribe((res: any) => {
        this.task = res;
        this.daysOfWeek = this.task.daysOfWeek;
        this.id = id;
      }, error => { })
    } else {
      this.buildTask();
      this.getDaysOfWeek();
    }
  }

  getDaysOfWeek() {
    this.daysOfWeek = this.dateUtil.daysOfTheWeek();
  }

  goHome() {
    this.router.navigate(["home"]);
  }


  save() {
    try {
      this.task.daysOfWeek = this.daysOfWeek;
      if (this.id) {
        this.taskdbService.update(this.task, this.id);
      } else {
        this.taskdbService.insert(this.task);
      }
      this.toastService.showSuccess(ToastMessage.TASK_SUCCESS.toString());
      this.router.navigate(["task-list"]);
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR.toString());
    }
  }

  buildTask() {
    this.task = { title: "", daysOfWeek: [], repeat: 0 };
  }
}
