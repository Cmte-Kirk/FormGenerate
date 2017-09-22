import { Component, OnInit, Input, ElementRef, Renderer, forwardRef } from '@angular/core';
import { FormControl } from "app/control/FormControl";
import { Control } from "app/control/Control";

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.css']
  //providers: [{provide: Control, useExisting: forwardRef(() => FieldTextComponent) }]
})
export class FieldTextComponent extends FormControl implements OnInit {

  @Input() tipo: String = "";
  @Input() valor: String = "";
  @Input() maxlength: String = "";

  constructor(ngEl: ElementRef, renderer: Renderer) {
    super(ngEl, renderer);
  }

  ngOnInit() {

  }

}
