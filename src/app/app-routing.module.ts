import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './modules/observable/pages/operators/operators.component';

const routes: Routes = [
  {
    path:'observables',
    loadChildren:()=>import('./modules/observable/observable.module').then(m=>m.ObservableModule)
  },
  {
    path:'stepper',
    loadChildren:()=>import('./modules/stepper/stepper.module').then(m=>m.StepperModule)
  },
  {
    path:'forms',
    loadChildren:()=>import('./modules/forms/template-forms.module').then(m=>m.TemplateFormsModule)
  },
  {
    path:'navbar',
    loadChildren:()=>import('./modules/navbar/navbar.module').then(m=>m.NavbarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
