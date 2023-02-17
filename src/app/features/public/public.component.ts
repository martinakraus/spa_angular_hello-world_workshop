import { Component, OnInit } from "@angular/core";
import { MessageService } from "@app/core";
import { SharedModule } from "@app/shared";

@Component({
  selector: "app-public",
  standalone: true,
  templateUrl: "./public.component.html",
  imports: [
    SharedModule
  ]
})
export default class PublicComponent implements OnInit {
  message = "";

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getPublicResource().subscribe((response) => {
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
