import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarMonthViewDay, CalendarDateFormatter } from 'angular-calendar'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  today: Date;
  days_label: Array<string> = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  selectedDay: CalendarMonthViewDay;
  calendarView = 'month';
  viewDate = new Date();
  vm = this;
  events = [
    {
      title: 'An event',
      color: "#5b8257",
      startsAt: new Date("06/20/2017"),
      endsAt: new Date("06/20/2017"),
      draggable: true,
      resizable: true,
      actions: "actions"
    }
  ];
  cellIsOpen = true;

  constructor(public navCtrl: NavController) {
    this.today = new Date();
  };

    createHtml = function (htmlStr)  {
    var frag = document.createDocumentFragment(),
      temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  }



  dayModifier = (day:CalendarMonthViewDay) => {
   // alert( "day.inMonth" + day.inMonth + " events"+ day.events+ " backgroundColor"+day.backgroundColor+ " badgeTotal"+day.badgeTotal);
   day.cssClass = 'cal-day-selected' ;
   //alert( JSON.stringify(day) );
  };

  dayClicked = (day, cell) => {
    //alert("Hello! I am an alert box!!" + Object.prototype.toString.call(day));
    alert(JSON.stringify(day));
    if (this.selectedDay) {
      delete this.selectedDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedDay = day;
  }


}
