import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StepperComponent } from "./components/stepper/stepper.component";
import { StepperHomeComponent } from "./stepper-home.component";

const routes:Routes = [
  {
    path:'',
    component:StepperHomeComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class StepperRoutingModule{

}
