import { Component, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ng_enhilion";

  mouseX: number = 0;
  mouseY: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
