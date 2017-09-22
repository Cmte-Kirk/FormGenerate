import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';
import { FormControl } from "app/control/FormControl";

@Component({
  selector: 'app-field-check',
  templateUrl: './field-check.component.html',
  styleUrls: ['./field-check.component.css']
})
export class FieldCheckComponent extends FormControl implements OnInit {

  @Input() valor: String = "";
  
  constructor(ngEl: ElementRef, renderer: Renderer) {
    super(ngEl, renderer);
  }

  ngOnInit() {
  }

}
