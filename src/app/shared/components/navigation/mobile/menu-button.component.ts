import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-menu-button",
  template: `
    <span
      (click)="onButtonClick()"
      id="mobile-nav-bar-menu-button"
      class="mobile-nav-bar__toggle material-icons"
    >
      menu
    </span>
  `
})
export class MenuButtonComponent {
  @Output() menuButtonClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.menuButtonClick.emit();
  }
}
