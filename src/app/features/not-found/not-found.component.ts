import { Component } from "@angular/core";
import { SharedModule } from "@app/shared";

@Component({
  selector: "app-not-found",
  standalone: true,
  templateUrl: "./not-found.component.html",
  imports: [
    SharedModule
  ]
})
export default class NotFoundComponent {
}
