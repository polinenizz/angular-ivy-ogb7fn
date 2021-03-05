import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ContactComponent } from "./Contact.Component";
import { HighlightDirective } from "./highlight.directive";
import { OddPipe } from './odd.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ContactComponent,
    HighlightDirective,
    OddPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
