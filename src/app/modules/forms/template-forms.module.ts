import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsDynamicComponent } from './components/reactive-forms-dynamic/reactive-forms-dynamic.component'


@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormsComponent,
    ReactiveFormsDynamicComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class TemplateFormsModule { }
