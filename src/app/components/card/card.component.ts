import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          transform: "translateZ(-100px) rotateY(0deg) translateY(0px) rotateZ(0deg)"
        })
      ),
      state(
        "closed",
        style({
          transform: "translateZ(-100px) rotateY(-180deg) translateY(200px) rotateZ(180deg)"
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("1s")])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() public image: string;
  public imagePath = "/assets/images/";
  public isOpen = false;

  constructor() {}

  ngOnInit() {}

  public onClick() {
    this.isOpen = !this.isOpen;
  }
}
