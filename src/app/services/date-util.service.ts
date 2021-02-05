import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  daysOfTheWeek() {
    return [
      {
        title: "Monday",
        value: 1,
        checked: false
      },
      {
        title: "Tuesday",
        value: 2,
        checked: false
      },
      {
        title: "Wednesday",
        value: 3,
        checked: false
      },
      {
        title: "Thursday",
        value: 4,
        checked: false
      },
      {
        title: "Friday",
        value: 5,
        checked: false
      },
      {
        title: "Saturday",
        value: 6,
        checked: false
      },
      {
        title: "Sunday",
        value: 7,
        checked: false
      }
    ];
  }

  months() {
    return [
      {
        title: "January",
        value: 0,
        checked: false
      },
      {
        title: "February",
        value: 1,
        checked: false
      },
      {
        title: "March",
        value: 2,
        checked: false
      },
      {
        title: "April",
        value: 3,
        checked: false
      },
      {
        title: "May",
        value: 4,
        checked: false
      },
      {
        title: "June",
        value: 5,
        checked: false
      },
      {
        title: "July",
        value: 6,
        checked: false
      },
      {
        title: "August",
        value: 7,
        checked: false
      },
      {
        title: "September",
        value: 8,
        checked: false
      },
      {
        title: "October",
        value: 9,
        checked: false
      },
      {
        title: "November",
        value: 10,
        checked: false
      },
      {
        title: "December",
        value: 11,
        checked: false
      },
    ]
  }
}
