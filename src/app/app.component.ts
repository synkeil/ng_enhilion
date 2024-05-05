import { Component, ElementRef, HostListener, Renderer2, ViewChild } from "@angular/core";
import { timeout } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Enhilion, Développeur Web Full Stack";

  mouseX: number = 0;
  mouseY: number = 0;

  // element ref for #cursor in app.component.html
  @ViewChild("cursor") cursor!: ElementRef;

  constructor(private renderer: Renderer2) {
    setTimeout(() => {
      this.renderer.addClass(this.cursor.nativeElement, "bg-opacity-0");
    }, 1000);
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    this.renderer.setStyle(
      this.cursor.nativeElement,
      "transform",
      `translateX(${this.mouseX - 16}px) translateY(${this.mouseY - 16}px)`
    );

    if (targetElement.tagName === "H1") {
      this.renderer.addClass(this.cursor.nativeElement, "bg-opacity-100");
    } else if (this.cursor.nativeElement.classList.contains("bg-opacity-100")) {
      this.renderer.removeClass(this.cursor.nativeElement, "bg-opacity-100");
    }
  }
}
