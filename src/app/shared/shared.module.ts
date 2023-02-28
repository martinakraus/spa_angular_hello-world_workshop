import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { COMPONENTS } from "./components";
import { LoginButtonComponent } from './components/button/login-button/login-button.component';
import { LogoutButtonComponent } from './components/button/logout-button/logout-button.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginButtonComponent,
    LogoutButtonComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule {
}
