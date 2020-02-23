import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from "@angular/core";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: "parent-counter",
  templateUrl: "./parent-counter.component.html",
  styleUrls: ["./parent-counter.component.css"]
})
export class ParentCounterComponent implements OnInit {
  // @ViewChild(CounterComponent, { static: true })
  // _countercomponent: CounterComponent;
  @ViewChildren(CounterComponent) _countercomponent: QueryList<
    CounterComponent
  >;

  constructor() {}

  ngOnInit() {}
  // incrimentOne() {
  //   this._countercomponent.incriment();
  // }
  // dicrimentOne() {
  //   this._countercomponent.dicriment();
  // }

  incrimentOne() {
    this._countercomponent.forEach(el => el.incriment());
  }
  dicrimentOne() {
    this._countercomponent.forEach(el => el.dicriment());
  }
}
