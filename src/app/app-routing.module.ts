import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";

const routes: Routes = [
  { path: "home", component: HomePage },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
