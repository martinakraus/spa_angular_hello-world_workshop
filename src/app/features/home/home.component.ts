import { Component } from '@angular/core';
import { SharedModule } from "@app/shared";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  imports: [
    SharedModule
  ]
})
export class HomeComponent {}
