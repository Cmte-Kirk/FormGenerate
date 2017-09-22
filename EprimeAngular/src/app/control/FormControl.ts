
import { Input, ElementRef, Renderer, Component } from "@angular/core";
import { Control } from "app/control/Control";


@Component({
    selector: 'form-control',
    template: ''
  })
export class FormControl extends Control {
    @Input() label : String = "";

    constructor(ngEl: ElementRef, renderer: Renderer) { 
        super(ngEl, renderer);
    }       
}