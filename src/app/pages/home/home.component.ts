import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillDbService } from 'src/app/services/bill-db.service';
import { BillHistoryDbService } from 'src/app/services/bill-history-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private billdbService: BillDbService,
    private billHistorydbService: BillHistoryDbService) { }

  ngOnInit(): void {

  }

  goToTaskRegister() {
    this.router.navigate(["task", 0]);
  }

  goToTaskList() {
    this.router.navigate(["task-list"]);
  }

  gotToTaskHistory() {
    this.router.navigate(["task-history"]);
  }

  goToBillRegister() {
    this.router.navigate(["bill", 0]);
  }

  goToBillList() {
    this.router.navigate(["bill-list"]);
  }

  gotToBillHistory() {
    this.router.navigate(["bill-history"]);
  }

  goToSalaryRegister() {
    this.router.navigate(["salary", 0]);
  }

  goToSalaryList() {
    this.router.navigate(["salary-list"]);
  }

  goToEnglishDictionaryRegister() {
    this.router.navigate(["english-dictionary", 0]);
  }

  goToEnglishDictionaryList() {
    this.router.navigate(["english-dictionary-list"]);
  }

  gotToEnglishDictionaryHistory() {
    this.router.navigate(["english-dictionary-history"]);
  }

  goToTimeClock() {
    this.router.navigate(["time-clock"]);
  }

  goToDashboard() {
    this.router.navigate(["dashboard"]);
  }


}
