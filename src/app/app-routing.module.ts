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
    loadChildren:()=>import('./modules/forms/forms.module').then(m=>m.FormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
