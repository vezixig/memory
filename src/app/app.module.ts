import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { PlaygroundComponent } from "./components/playground/playground.component";
import { SafePipe } from "src/app/pipes/angular-safe.pipe";

@NgModule({
  declarations: [AppComponent, CardComponent, PlaygroundComponent, SafePipe],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
