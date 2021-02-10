import { Component, OnInit } from '@angular/core';
import { TimeClockDbService } from 'src/app/services/time-clock-db.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastMessage } from 'src/app/constants/toast-message.enum';
import { Router } from '@angular/router';
import { DateUtilService } from 'src/app/services/date-util.service';

@Component({
  selector: 'app-time-clock',
  templateUrl: './time-clock.component.html',
  styleUrls: ['./time-clock.component.css']
})
export class TimeClockComponent implements OnInit {
  timeClocks: any = [];
  timeClocksToday: any = [];
  timeClock: any;
  now: Date;
  constructor(private timeClockDbService: TimeClockDbService,
    private toastService: ToastService, private router: Router,
    private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
    this.getTimeClocks();
    this.buildTimeClock();
    this.getMoment();
  }


  getForseen(timeClock) {
    let dateIn = new Date(timeClock.value.date);
    return dateIn.setHours(dateIn.getHours() + 9);
  }

  getTimeWorked() {
    let dtIn = new Date(this.timeClocksToday[0].value.date);
    let dtOut = new Date(this.timeClocksToday[1].value.date);
    return this.dateUtilService.diffHour(dtIn, dtOut) + "H " + this.dateUtilService.diffMinutes(dtIn, dtOut) + "min";
  }

  getMoment() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  getTimeClocks() {
    let today = new Date();
    today.setHours(0);
    today.setMinutes(1);
    this.timeClockDbService.getAll().subscribe((res: any) => {
      this.timeClocks = res;
      this.timeClocksToday = this.timeClocks.filter((v => {
        return v.value.date > today.getTime();
      }))
    })
  }

  save() {
    try {
      debugger;
      if (this.timeClocksToday.length >= 2) {
        this.toastService.showWarning("You already clock");
      } else {
        let checkExists = this.timeClocksToday.find(v => v.value.inOut === this.timeClock.inOut)
        if (checkExists) {
          this.toastService.showWarning("You already clock " + this.timeClock.inOut);
          return;
        }
        this.timeClock.date = this.now.getTime()
        this.timeClockDbService.insert(this.timeClock);
        this.toastService.showSuccess(ToastMessage.BILL_SUCCESS.toString());
        this.buildTimeClock();
      }
    } catch (e) {
      this.toastService.showError(ToastMessage.ERROR.toString());
    }
  }



  buildTimeClock() {
    this.timeClock = { date: null, inOut: "" };
  }

  goHome() {
    this.router.navigate(["home"]);
  }



}
