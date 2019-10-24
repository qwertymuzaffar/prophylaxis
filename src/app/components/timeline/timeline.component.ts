import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelineData = [];
  currentDate;
  colors = ['#00ac60', '#ffaf30', '#ff6000', '#ff0000'];

  constructor() { }

  ngOnInit() {
    moment.locale('ru');

    this.timeLineRender();
  }

  getDate(date) {
    console.log(date);
  }

  timeLineRender(date?) {
    let cDate = '';
    this.timelineData = [];
    date ? cDate = date : cDate = moment().format('L');
    this.currentDate = cDate;
    const a = moment(cDate, 'DD.MM.YYYY').subtract(2, 'w');
    const b = moment(cDate, 'DD.MM.YYYY').add(2, 'w');

    for (const m = moment(a); m.isBefore(b); m.add(1, 'days')) {
      this.timelineData.push({
        day: m.format('DD.MM.YYYY'),
        desc: m.format('D MMMM YYYY' + ' года'),
        color: this.colors[Math.floor(Math.random() * 4)]
      });
    }
  }

  goToDate(day) {
    let date;
    if (day === 'next') {
      date = moment(this.currentDate, 'DD.MM.YYYY').add(1, 'days');
    } else {
      date = moment(this.currentDate, 'DD.MM.YYYY').subtract(1, 'days');
    }
    this.timeLineRender(date);
  }

  onDateChange(e) {
    const date = moment(e.value).format('DD.MM.YYYY');
    this.timeLineRender(date);
  }

}
