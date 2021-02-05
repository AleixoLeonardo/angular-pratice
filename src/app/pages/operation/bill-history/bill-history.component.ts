import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { BillHistoryDbService } from 'src/app/services/bill-history-db.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {
  billHistory: any = [];
  constructor(private billHistorydbService: BillHistoryDbService,
    private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.getBillHistory();
  }

  getBillHistory() {
    this.billHistorydbService.getAll().subscribe((res: any) => {
      this.billHistory = res;
    })
  }

  delete(history) {
    try {
      this.billHistorydbService.delete(history.key);
      this.toastService.showSuccess(ToastMessage.DELETED);
      this.getBillHistory();
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR);
    }
  }

  goHome() {
    this.router.navigate(["home"]);
  }

}
