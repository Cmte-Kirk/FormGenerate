import { Component, OnInit, ElementRef, Renderer, Input } from '@angular/core';
import { ActionControl } from "app/control/ActionControl";

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent extends ActionControl implements OnInit {
  @Input() display : String = "";

  constructor(ngEl: ElementRef, renderer: Renderer) {
    super(ngEl, renderer);
  }

  ngOnInit() {
  }

}
