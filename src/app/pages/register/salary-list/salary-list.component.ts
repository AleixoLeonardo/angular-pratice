import { Component, OnInit } from '@angular/core';
import { SalaryDbService } from 'src/app/services/salary-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit {
  salarys: any = [];
  salary: any;

  constructor(private salarydbService: SalaryDbService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSalaryList();
  }

  getSalaryList() {
    this.salarydbService.getAll().subscribe((res: any) => {
      this.salarys = res;
    }, error => {
    })
  }


  select(salary) {
    this.router.navigate(["salary", salary.key])
  }

  goHome() {
    this.router.navigate(["home"]);
  }

}
