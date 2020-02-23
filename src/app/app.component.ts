import { Component } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "queryList";

  ngOnInit() {
    $(document).ready(function() {
      $("button").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });
    });
  }
}
