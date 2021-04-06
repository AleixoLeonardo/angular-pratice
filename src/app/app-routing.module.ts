import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/register/task/task.component';
import { TaskListComponent } from './pages/register/task-list/task-list.component';
import { BillComponent } from './pages/register/bill/bill.component';
import { BillListComponent } from './pages/register/bill-list/bill-list.component';
import { BillHistoryComponent } from './pages/operation/bill-history/bill-history.component';
import { TaskHistoryComponent } from './pages/operation/task-history/task-history.component';
import { SalaryComponent } from './pages/register/salary/salary.component';
import { SalaryListComponent } from './pages/register/salary-list/salary-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnglishDictonaryComponent } from './pages/register/english-dictonary/english-dictonary.component';
import { EnglishDictonaryListComponent } from './pages/register/english-dictonary-list/english-dictonary-list.component';
import { PhrasesComponent } from './pages/operation/phrases/phrases.component';
import { TimeClockComponent } from './pages/operation/time-clock/time-clock.component';
import { GoalComponent } from './pages/register/goal/goal.component';
import { GoalListComponent } from './pages/register/goal-list/goal-list.component';


const routes: Routes = [
  { path: 'task/:id', component: TaskComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-history', component: TaskHistoryComponent },
  { path: 'bill/:id', component: BillComponent },
  { path: 'bill-list', component: BillListComponent },
  { path: 'bill-history', component: BillHistoryComponent },
  { path: 'salary/:id', component: SalaryComponent },
  { path: 'salary-list', component: SalaryListComponent },
  { path: 'english-dictionary/:id', component: EnglishDictonaryComponent },
  { path: 'english-dictionary-list', component: EnglishDictonaryListComponent },
  { path: 'time-clock', component: TimeClockComponent },
  { path: 'goal/:id', component: GoalComponent },
  { path: 'goal-list', component: GoalListComponent },

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

