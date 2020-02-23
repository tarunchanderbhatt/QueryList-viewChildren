import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ChangecolorDirective } from "../changecolor.directive";

@Component({
  selector: "parentchangecolor",
  templateUrl: "./parentchangecolor.component.html",
  styleUrls: ["./parentchangecolor.component.css"]
})
export class ParentchangecolorComponent implements OnInit {
  // @ViewChild(ChangecolorDirective, { static: true })
  // _changecolordirective: ChangecolorDirective;

  @ViewChildren(ChangecolorDirective) _changecolordirective: QueryList<
    ChangecolorDirective
  >;

  constructor() {}

  ngOnInit() {}

  setColor(val: string) {
    // this._changecolordirective.changeColor(val);
    this._changecolordirective.forEach(el => el.changeColor(val));
  }
}
