import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }
  showSuccess(msg) {
    this.toastr.success(msg, 'Success!');
  }

  showError(msg) {
    this.toastr.error(msg, 'Sorry!')
  }

  showWarning(msg) {
    this.toastr.warning(msg, 'Ops!')
  }


}
