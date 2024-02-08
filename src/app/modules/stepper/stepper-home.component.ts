import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector:'stepper-home',
  templateUrl:'./stepper-home.component.html'
})
export class StepperHomeComponent{


  constructor(private formBuilder: FormBuilder){

  }

  empRegister = this.formBuilder.group({
    basic: this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.required),
      lastName: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.email),
      phone: this.formBuilder.control(''),
    }),
    contact: this.formBuilder.group({
      state: this.formBuilder.control('', Validators.required),
      street: this.formBuilder.control('', Validators.required),
      city: this.formBuilder.control(''),
      houseNumber: this.formBuilder.control(''),
    }),
    security: this.formBuilder.group({
      password: this.formBuilder.control('', Validators.required),
      repeatPassword: this.formBuilder.control('',Validators.required),
      recoveryEmail: this.formBuilder.control(''),
      recoveryPhoneNumber: this.formBuilder.control(''),
    }),
  })



}
