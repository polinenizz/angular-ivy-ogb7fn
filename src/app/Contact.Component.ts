import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
  selector: "contact",
  template:
    "<p appHighlight> <strong>Phone:</strong> {{phone}} , <strong>Email:</strong>{{Email}}</p>",
  styles: [
    `
      p {
        font-family: Times New Roman;
      }
    `
  ]
})
export class ContactComponent {
  @Input() phone: string;
  @Input() Email: string;
}
