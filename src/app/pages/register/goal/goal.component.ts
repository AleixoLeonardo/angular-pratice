import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMessage } from 'src/app/constants/toast-message.enum';
import { DateUtilService } from 'src/app/services/date-util.service';
import { GoalDbService } from 'src/app/services/goal-db.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goal: any = null;
  id: string;
  dateConfig = this.dateUtilService.getConfig();
  constructor(private router: Router,
    private route: ActivatedRoute,
    private goalDbService:GoalDbService,
    private dateUtilService:DateUtilService,
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
      this.goalDbService.getByKey(id).subscribe((res: any) => {
        this.goal = res;
        this.id = id;
        this.goal.due = this.dateUtilService.dateToString(new Date(this.goal.due))
      }, error => { })
    } else {
      this.buildGoal();
    }
  }

  goHome() {
    this.router.navigate(["home"]);
  }

  save() {
    try {
      this.goal.due = this.dateUtilService.stringToDate(this.goal.due).getTime();
      if (this.id) {
        this.goalDbService.update(this.goal, this.id);
      } else {
        this.goalDbService.insert(this.goal);
      }
      this.toastService.showSuccess(ToastMessage.GOAL_SUCCESS.toString());
      this.router.navigate(["goal-list"]);
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR.toString());
    }
  }

  buildGoal() {
    this.goal = { title: "", due: this.dateUtilService.dateToString(new Date()), completed: false };
  }

}
