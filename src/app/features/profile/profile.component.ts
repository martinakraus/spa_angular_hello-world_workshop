import { Component } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { UserProfileModel } from "@app/core";
import { AsyncPipe, NgIf } from "@angular/common";
import { SharedModule } from "@app/shared";

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
  user$ = of({
    nickname: "Customer",
    name: "One Customer",
    picture: "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png",
    updated_at: "2021-05-04T21:33:09.415Z",
    email: "customer@example.com",
    email_verified: false,
    sub: "auth0|12345678901234567890"
  } as UserProfileModel);

  title = "User Profile Object";

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
}
