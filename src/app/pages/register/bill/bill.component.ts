import { Component, OnInit } from '@angular/core';
import { BillDbService } from 'src/app/services/bill-db.service';
import { ToastService } from 'src/app/services/toast.service';
import { DateUtilService } from 'src/app/services/date-util.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMessage } from 'src/app/constants/toast-message.enum';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill: any;
  months: any = [];
  id: string = "";
  allSelected: boolean = false;

  constructor(private billDbService: BillDbService,
    private toastService: ToastService,
    private dateUtil: DateUtilService,
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
      this.billDbService.getByKey(id).subscribe((res: any) => {
        this.bill = res;
        this.months = this.bill.months;
        this.id = id;
      }, error => { })
    } else {
      this.buildTask();
      this.getMonths();
    }
  }

  getMonths() {
    this.months = this.dateUtil.months();
  }

  goHome() {
    this.router.navigate(["home"]);
  }


  save() {
    try {
      this.bill.months = this.months;
      if (this.id) {
        this.billDbService.update(this.bill, this.id);
      } else {
        this.billDbService.insert(this.bill);
      }
      this.toastService.showSuccess(ToastMessage.BILL_SUCCESS.toString());
      this.router.navigate(["bill-list"]);
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR.toString());
    }
  }

  selectAll() {
    for (let month of this.months) {
      month.checked = !this.allSelected;
    }
    this.allSelected = !this.allSelected;
  }

  buildTask() {
    this.bill = { title: "", months: [], predicted: 0 };
  }
}
