
import { Input, ElementRef, Renderer, Component } from "@angular/core";
import { Control } from "app/control/Control";

@Component({
    selector: 'action-control',
    template: ''
  })
export class ActionControl extends Control {
    //@Input() id : String = "";

    constructor(ngEl: ElementRef, renderer: Renderer) { 
        super(ngEl, renderer);
    }       
    
}