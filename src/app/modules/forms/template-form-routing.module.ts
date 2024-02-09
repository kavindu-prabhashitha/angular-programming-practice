import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsDynamicComponent } from './components/reactive-forms-dynamic/reactive-forms-dynamic.component';

const routes:Routes = [
  {
    path:'template',
    component:TemplateFormComponent
  },
  {
    path:'reactive',
    component:ReactiveFormsComponent
  },
  {
    path:'dynamic',
    component:ReactiveFormsDynamicComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FormRoutingModule { }
