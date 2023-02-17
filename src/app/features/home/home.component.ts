import { Component } from "@angular/core";
import { SharedModule } from "@app/shared";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: "./home.component.html"
})
export class HomeComponent {
}
