import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaryDbService } from 'src/app/services/salary-db.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  salary: any;
  id: string = "";
  allSelected: boolean = false;

  constructor(private salaryDbService: SalaryDbService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router) { }

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
      this.salaryDbService.getByKey(id).subscribe((res: any) => {
        this.salary = res;
        this.id = id;
      }, error => { })
    } else {
      this.buildSalary();
    }
  }

  goHome() {
    this.router.navigate(["home"]);
  }

  save() {
    try {
      if (this.id) {
        this.salaryDbService.update(this.salary, this.id);
      } else {
        this.salaryDbService.insert(this.salary);
      }
      this.toastService.showSuccess(ToastMessage.BILL_SUCCESS.toString());
      this.router.navigate(["salary-list"]);
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR.toString());
    }
  }

  buildSalary() {
    this.salary = { title: "", value: 0 };
  }

}
