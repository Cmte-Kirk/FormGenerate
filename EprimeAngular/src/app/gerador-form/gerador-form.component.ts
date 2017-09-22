import { Component, OnInit, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { FormsService } from "app/gerador-form/forms-service";
import { Control } from "app/control/Control";
import { FieldTextComponent } from "app/field-text/field-text.component";
import { FieldCheckComponent } from "app/field-check/field-check.component";
import { FieldSelectComponent } from "app/field-select/field-select.component";
import { ActionButtonComponent } from "app/action-button/action-button.component";

@Component({
  selector: 'app-gerador-form',
  templateUrl: './gerador-form.component.html',
  styleUrls: ['./gerador-form.component.css']
})
export class GeradorFormComponent implements OnInit {

  controles: Control[] = new Array<Control>();
  formElements: Array<{ view: ViewRef, component: Control }> = [];
  actionElements: Array<{ view: ViewRef, component: Control }> = [];
  myForm: FormGroup;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private http: Http, private formsService: FormsService, private fb: FormBuilder, private compFactoryResolver: ComponentFactoryResolver) {
    this.myForm = fb.group({
      'firstName': [''],
      'lastName': [''],
    });
  }

  ngOnInit() {
    this.formsService.eventoMenuClicado.subscribe(
      form => {
        this.resetContainer();
        this.consultaFormMetaDados(form);
      }
    );
  }

  consultaFormMetaDados(form) {
    console.log(form);
    this.http.get(`http://localhost:55759/api/values/${form}`)
      .map(dados => dados.json()).subscribe(
      dados => this.instanciarControles(dados)

      );
  }

  instanciarControles(dados) {
    console.log(dados);
    let itens = new Array();
    for (let key in dados) {
      let item = dados[key];
      item.k = key;
      itens.push(item);
    }
    itens = itens.sort(this.compare);
    for (let key in itens) {
      let item = itens[key];
      if (item.k == "Actions"){
        for (let index in item) {
          let action = item[index];
          if (action != "Actions"){
            this.instanciar(action);
          }
        }
      }else{
        this.instanciar(item);        
      }
    }

  }

  instanciar(item) {
    let controle: Control;
    if (item.typeName == "int") {
      //let ctrl = new FieldTextComponent();
      let ctrl = <FieldTextComponent>this.addComponent(FieldTextComponent);
      ctrl.id = item.name;
      ctrl.label = item.display;
      ctrl.tipo = "text";
      controle = <Control>ctrl;
      this.addArrayControles(controle, this.formElements);
    }
    console.log(item);    
    console.log(item.typeName);    
    if (item.typeName.match("^varchar")) {
      let re = /\((.*)\)/;
      let ml = item.typeName.match(re)[1];
      let ctrl = <FieldTextComponent>this.addComponent(FieldTextComponent);
      ctrl.id = item.name;
      ctrl.label = item.display;
      ctrl.maxlength = ml;
      ctrl.tipo = "text";
      controle = <Control>ctrl;
      this.addArrayControles(controle, this.formElements);
    }
    if (item.typeName == "bit") {
      let ctrl = <FieldCheckComponent>this.addComponent(FieldCheckComponent);
      ctrl.id = item.name;
      ctrl.label = item.display;
      controle = <Control>ctrl;
      this.addArrayControles(controle, this.formElements);
    }
    if (item.typeName.match("^enum")) {
      let re = /\((.*)\)/;
      let ml = item.typeName.match(re)[1].split(",");
      let ctrl = <FieldSelectComponent>this.addComponent(FieldSelectComponent);
      ctrl.id = item.name;
      ctrl.label = item.display;
      ctrl.insertIntens(ml);
      controle = <Control>ctrl;
      this.addArrayControles(controle, this.formElements);
    }
    if (item.typeName == "button") {
      //let ctrl = new FieldTextComponent();
      let ctrl = <ActionButtonComponent>this.addComponent(ActionButtonComponent);
      ctrl.id = item.name;
      ctrl.display = item.display;
      controle = <Control>ctrl;
      this.addArrayControles(controle, this.actionElements);
    }

    //this.myForm = this.fb.group(this.controles);

    /*
    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(controle).map((inputName) => {return {provide: inputName, useValue: controle[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    
    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
    
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(controle);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    
    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    this.dynamicComponentContainer.insert(controle);
    */
  }

  addArrayControles(controle: Control, elements: Array<{ view: ViewRef, component: Control }>) {
    this.controles.push(controle);
    let view: ViewRef = this.container.detach(0);
    let component: Control = <Control>controle;
    elements.push({ view, component });
  }
  public addComponent(ngItem: Type<Control>): Control {
    let factory = this.compFactoryResolver.resolveComponentFactory(ngItem);
    const ref = this.container.createComponent(factory);
    const newItem: Control = ref.instance;
    //this.controles.push(newItem);                 
    return newItem;
  }

  // public addComponent(ngItem: Type<Control>): Control {
  //   let factory = this.compFactoryResolver.resolveComponentFactory(ngItem);
  //   const ref = this.container.createComponent(factory);
  //   const newItem: Control = ref.instance;
  //   this.controles.push(newItem);                 
  //   return newItem;
  // }
  private compare(a, b) {
    if (a.order < b.order)
      return -1;
    if (a.order > b.order)
      return 1;
    return 0;
  }
  resetContainer() {
    this.formElements = [];
    this.actionElements = [];
  }

}
