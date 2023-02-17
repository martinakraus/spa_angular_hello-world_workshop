import { Component, OnInit } from "@angular/core";
import { MessageService } from "@app/core";
import { SharedModule } from "@app/shared";

@Component({
  selector: "app-protected",
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: "./protected.component.html"
})
export default class ProtectedComponent implements OnInit {
  message = "";

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getProtectedResource().subscribe((response) => {
      const { data, error } = response;

      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }
}
