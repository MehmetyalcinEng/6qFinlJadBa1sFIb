import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  saat: string;
  counter: number;
  interval: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit(): void {
    this.interval = 1000;

    this.counter = 36000;
    this.geriSay();
  }


  geriSay() {

    const aa = setInterval(() => {
      this.counter -= 1;
      this.hours  = Math.floor(this.counter / 3600);
      this.minutes = Math.floor((this.counter % 3600) / 60);

      this.saat = ('00' + this.hours).slice(-2) +
      ':' +
      ('00' + this.minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(this.counter - this.minutes * 60)).slice(-2).toString();
    }, this.interval);
  }
  arttir(deger: number){

  if ((this.counter + deger ) < 0){
    this.counter = 86400 + deger;
  }
  else if ((this.counter + deger) > 86400){
    this.counter = deger;
  }
  else {
    this.counter += deger;
  }


}
}
