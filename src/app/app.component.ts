import { Component } from "@angular/core";
import { Planet } from "./models/planet";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {
    const mars = new Planet("Mars");
    mars.greet("Welcome to", true);
  }
}
