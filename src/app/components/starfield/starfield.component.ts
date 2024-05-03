interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  blur: number;
}
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-starfield",
  templateUrl: "./starfield.component.html",
  styleUrls: ["./starfield.component.scss"],
})
export class StarfieldComponent implements OnInit, AfterViewInit {
  public stars: Star[] = [];
  private focalCenter = 10;
  width = window.innerWidth;
  height = window.innerHeight;

  ngAfterViewInit(): void {
    // this.animateStars();
  }

  ngOnInit() {
    this.makeStars();
  }

  makeStars() {
    for (let i = 0; i < 100; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 100,
        blur: 0,
        size: Math.random() * 3,
      });
    }

    // update star blur using calculateBlur()
    this.stars.forEach((star) => {
      star.blur = this.calculateBlur(star);
    });

    console.log(this.stars);
  }

  calculateBlur(star: Star) {
    // difine blur as a function of distance from focalCenter
    const blur = Math.abs(star.z - this.focalCenter) / 10;
    return blur;
  }

  // animate the stars moving to the right using requestanimationframe
  animateStars() {
    // update star positions
    this.stars.forEach((star) => {
      star.x += 0.1;
      if (star.x > window.innerWidth) {
        star.x = 0;
      }
    });

    // update star blur using calculateBlur()
    this.stars.forEach((star) => {
      star.blur = this.calculateBlur(star);
    });

    // request next frame
    requestAnimationFrame(() => {
      this.animateStars();
    });
  }
}
