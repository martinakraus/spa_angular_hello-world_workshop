import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "@app/shared";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, SharedModule, AppRoutingModule, HttpClientModule,
    AuthModule.forRoot({
      ...env.auth0,
      httpInterceptor: {
        allowedList: [ `${env.api.serverUrl}/api/messages/protected` ],
      },
    }),
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
