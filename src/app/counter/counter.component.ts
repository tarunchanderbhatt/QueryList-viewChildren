import { Component, OnInit } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  msg: any = "this is mesage";
  countdown: number = 0;
  constructor() {}

  ngOnInit() {}

  incriment() {
    this.countdown = this.countdown + 1;
    this.msg = this.countdown;
  }
  dicriment() {
    this.countdown = this.countdown - 1;
    this.msg = this.countdown;
  }
}
