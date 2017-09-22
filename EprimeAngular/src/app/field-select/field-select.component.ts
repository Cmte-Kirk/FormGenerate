import { Component, OnInit, Input, Optional, ElementRef, Renderer } from '@angular/core';
import { FormControl } from "app/control/FormControl";

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css']
})
export class FieldSelectComponent extends FormControl  implements OnInit {

  @Input() tipo: String = "";
  @Input() valor: String = "";
  @Input() itens: Array<SelectItem> = new Array<SelectItem>();

  constructor(ngEl: ElementRef, renderer: Renderer) { 
    super(ngEl, renderer);
  }
  
  ngOnInit() {
  }
  insertIntens(lista: any[]){
    if (lista && lista.length > 0) {
      for (var index = 0; index < lista.length; index++) {
        this.itens.push(new SelectItem(index, lista[index]));
      }      
    }
  }
}

export class SelectItem {
  constructor(id:number, texto:string) {
    this.id=id;
    this.texto=texto;
}

id:number;
texto:string;  
}
  