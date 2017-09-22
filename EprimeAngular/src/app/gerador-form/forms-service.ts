import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class FormsService {

    eventoMenuClicado = new EventEmitter();
    
    constructor(){

    }
    
    lancaEventoMenuClicado(menuItem){
        this.eventoMenuClicado.emit(menuItem);
    }
}