import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';
import { BillDbService } from 'src/app/services/bill-db.service';
import { BillHistoryDbService } from 'src/app/services/bill-history-db.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  bills: any = [];
  bill: any;
  loading: boolean = false;
  modalRef: BsModalRef;
  valuePaid: number = 0;

  constructor(private billdbService: BillDbService,
    private router: Router,
    private toastService: ToastService,
    private billHistoryDbService: BillHistoryDbService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getBills();
  }

  getBills() {
    this.billdbService.getAll().subscribe((res: any) => {
      this.bills = res;
    }, error => {
    })
  }



  select(bill) {
    this.router.navigate(["bill", bill.key])
  }

  finish() {
    this.loading = true;
    let able = false;
    for (let month of this.bill.value.months) {
      if (month.value === new Date().getMonth() && month.checked) {
        able = true;
        break;
      }
    }
    if (able) {
      this.loading = false;
      try {
        this.billHistoryDbService.insert({
          bill_key: this.bill.key,
          bill: this.bill.value,
          date: new Date().getTime(),
          valuePaid: this.valuePaid
        });
        this.toastService.showSuccess(ToastMessage.BILL_HISTORY_SUCCESS);
        this.modalRef.hide();
      } catch (e) {
        this.toastService.showError(ToastMessage.ERROR);
      }
    } else {
      this.loading = false;
      this.toastService.showWarning("You can't do this");
    }
  }

  openModal(template: TemplateRef<any>, bill) {
    this.modalRef = this.modalService.show(template);
    this.bill = bill;
  }

  goHome() {
    this.router.navigate(["home"]);
  }

}
