import { NgModule } from '@angular/core';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperRoutingModule } from './stepper-routing.module';
import { CommonModule } from '@angular/common';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperHomeComponent } from './stepper-home.component';
import { InformationComponent } from './components/information/information.component';
import { ContactComponent } from './components/contact/contact.component';
import { SecurityComponent } from './components/security/security.component';
import { FinishComponent } from './components/finish/finish.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StepperComponent,StepperHomeComponent, InformationComponent, ContactComponent, SecurityComponent, FinishComponent],
  imports: [StepperRoutingModule, CommonModule,CdkStepperModule,ReactiveFormsModule],
  exports:[CdkStepperModule]
})
export class StepperModule {}
