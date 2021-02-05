import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillDbService } from 'src/app/services/bill-db.service';
import { BillHistoryDbService } from 'src/app/services/bill-history-db.service';
import { SalaryDbService } from 'src/app/services/salary-db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalPredicted: number = 0;
  expenses: number = 0;
  salary: number = 0;
  constructor(private router: Router,
    private billdbService: BillDbService,
    private billHistorydbService: BillHistoryDbService,
    private salaryDbService: SalaryDbService) { }

  ngOnInit(): void {
    this.getBills();
    this.getBillHistory();
    this.getSalaryList();
  }

  getBillHistory() {
    this.billHistorydbService.getAll().subscribe((res: any) => {
      res.map(v => {
        this.expenses += Number(v.value.valuePaid)
      })
    })
  }

  getMoneyValue(numero) {
    return numero.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  }

  getBills() {
    this.billdbService.getAll().subscribe((res: any) => {
      res.map(v => {
        this.totalPredicted += Number(v.value.predicted);
      })
    }, error => {
    })
  }

  getSalaryList() {
    this.salaryDbService.getAll().subscribe((res: any) => {
      res.map(v => {
        this.salary += Number(v.value.value);
      })
    }, error => {

    })
  }

  goHome() {
    this.router.navigate(["home"]);
  }

}
