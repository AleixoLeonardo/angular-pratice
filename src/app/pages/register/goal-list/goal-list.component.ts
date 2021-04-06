import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastMessage } from 'src/app/constants/toast-message.enum';
import { GoalDbService } from 'src/app/services/goal-db.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  goals: any = [];
  loading: boolean = false;
  constructor(private goaldbService: GoalDbService,
    private router: Router,
    private toastService: ToastService) { }

    ngOnInit(): void {
      this.getGoals();
    }
  
    async getGoals() {
      this.goaldbService.getAll().subscribe((res: any) => {
        this.goals = res;
      }, error => {
      })
    }
  
    select(goal) {
      this.router.navigate(["goal", goal.key])
    }
  
    complete(goal) {
      goal.value.completed = true;
      this.goaldbService.update(goal.value, goal.key);
      this.toastService.showSuccess(ToastMessage.GOAL_SUCCESS.toString());
      this.getGoals();
    }

    new(){
      this.router.navigate(["goal", 0]);
    }
  
    goHome() {
      this.router.navigate(["home"]);
    }

}
