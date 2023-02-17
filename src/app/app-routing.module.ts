import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "profile",
    loadComponent: () => import("./features/profile/profile.component")
  },
  {
    path: "public",
    loadComponent: () => import("./features/public/public.component")
  },
  {
    path: "protected",
    loadComponent: () => import("./features/protected/protected.component")
  },
  {
    path: "**",
    loadComponent: () => import("./features/not-found/not-found.component")
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
