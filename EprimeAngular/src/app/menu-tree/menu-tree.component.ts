import { Component, OnInit, Input, EventEmitter, ViewChild } from '@angular/core';
import { FormsService } from "app/gerador-form/forms-service";

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {

  //@Input() valor : String = "Cliente";
  //@ViewChild('valor') valor: string;
  
  //eventoMenuClicado = new EventEmitter();

  constructor(private formsService: FormsService) { }

  ngOnInit() {
  }

  botaoClicado(valor){
    //this.eventoMenuClicado.emit(this.valor);    
    this.formsService.lancaEventoMenuClicado(valor);
  }
}
