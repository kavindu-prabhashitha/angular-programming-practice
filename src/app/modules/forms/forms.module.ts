import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { TemplateFormComponent } from './components/template-form/template-form.component';



@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormsModule { }
