import { Component } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { UserProfileModel } from "@app/core";
import { AsyncPipe, NgIf } from "@angular/common";
import { SharedModule } from "@app/shared";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-profile",
  standalone: true,
  templateUrl: "./profile.component.html",
  imports: [
    AsyncPipe,
    NgIf,
    SharedModule
  ]
})
export default class ProfileComponent {
  title = "Decoded ID Token";

  user$ = this.auth.user$;

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));

  constructor(private auth: AuthService) {
  }
}
