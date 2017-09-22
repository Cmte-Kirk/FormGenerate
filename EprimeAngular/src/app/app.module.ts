import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FieldTextComponent } from './field-text/field-text.component';
import { GeradorFormComponent } from './gerador-form/gerador-form.component';
import { ScreenComponent } from './screen/screen.component';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';
import { FormsService } from "app/gerador-form/forms-service";
import { ViewDirective } from "app/gerador-form/view-directive";
import { Control } from "app/control/Control";
import { FormControl } from "app/control/FormControl";
import { ActionControl } from "app/control/ActionControl";
import { FieldCheckComponent } from './field-check/field-check.component';
import { FieldSelectComponent } from './field-select/field-select.component';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    Control,
    FormControl,
    ActionControl,
    ScreenComponent,
    MenuTreeComponent,
    ViewDirective,
    FieldTextComponent,
    FieldCheckComponent,
    GeradorFormComponent,
    FieldSelectComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  entryComponents: [FieldTextComponent, FieldCheckComponent, FieldSelectComponent, ActionButtonComponent],
  providers: [FormBuilder, FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
