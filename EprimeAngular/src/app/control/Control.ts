
import { Input, Component, ElementRef,  Renderer, OnInit } from "@angular/core";

@Component({
    selector: 'control',
    template: '<ng-content></ng-content>'
  })
export class Control {
    @Input() id : String = "";

    constructor(protected _ngEl: ElementRef,protected _renderer: Renderer) {
    } 
    public get element(): any {
        return this._ngEl.nativeElement;
    }
    removeFromParent() {
         this._ngEl.nativeElement.remove();
    }
    ngOnInit(): void {
        this._renderer.setElementClass(this._ngEl.nativeElement, 'control', true);
    }
}
