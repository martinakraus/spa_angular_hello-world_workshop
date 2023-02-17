import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { map } from "rxjs/operators";
import { AsyncPipe, NgIf } from "@angular/common";
import { SharedModule } from "@app/shared";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule
  ],
  templateUrl: "./profile.component.html"
})
export default class ProfileComponent {
  title = "Decoded ID Token";

  user$ = this.auth.user$;

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));

  constructor(private auth: AuthService) {
  }
}
