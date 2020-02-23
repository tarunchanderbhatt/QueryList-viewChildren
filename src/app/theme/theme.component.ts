import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList
  // ViewChildren
} from "@angular/core";

@Component({
  selector: "theme",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.css"]
})
export class ThemeComponent implements OnInit, AfterViewInit {
  constructor() {}
  // @ViewChild("fname", { static: true }) fname: ElementRef;
  // @ViewChild("lastname", { static: true }) lastname: ElementRef;
  // @ViewChild("age", { static: true }) age: ElementRef;
  // @ViewChild("sex", { static: true }) sex: ElementRef;
  // @ViewChild("address", { static: true }) address: ElementRef;

  @ViewChildren("fname") fname: QueryList<ElementRef>;
  @ViewChildren("lastname") lastname: QueryList<ElementRef>;
  @ViewChildren("age") age: QueryList<ElementRef>;
  @ViewChildren("sex") sex: QueryList<ElementRef>;
  @ViewChildren("address") address: QueryList<ElementRef>;

  ngOnInit() {}
  ngAfterViewInit() {
    // this.fname.nativeElement.style.backgroundColor = "red";
    // this.lastname.nativeElement.style.backgroundColor = "pink";
    // this.address.nativeElement.style.backgroundColor = "orange";
    // this.age.nativeElement.style.backgroundColor = "green";
    // this.sex.nativeElement.style.backgroundColor = "skyblue";

    this.fname.forEach(el => {
      el.nativeElement.style.backgroundColor = "red";
    });
    this.lastname.forEach(el => {
      el.nativeElement.style.backgroundColor = "blue";
    });
    this.address.forEach(el => {
      el.nativeElement.style.backgroundColor = "green";
    });
    this.age.forEach(el => {
      el.nativeElement.style.backgroundColor = "pink";
    });
    this.sex.forEach(el => {
      el.nativeElement.style.backgroundColor = "orange";
    });
  }
}
