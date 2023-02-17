import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-close-button",
  template: `
    <span
      (click)="onButtonClick()"
      id="mobile-nav-bar-close-button"
      class="mobile-nav-bar__toggle material-icons"
    >
      close
    </span>
  `
})
export class CloseButtonComponent {
  @Output() closeButtonClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.closeButtonClick.emit();
  }
}
