import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePage } from "./pages/home/home.page";
import { StarfieldComponent } from "./components/starfield/starfield.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [AppComponent, HomePage, StarfieldComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
