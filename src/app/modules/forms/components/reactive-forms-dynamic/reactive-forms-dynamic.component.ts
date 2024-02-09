import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-dynamic',
  templateUrl: './reactive-forms-dynamic.component.html',
  styleUrls: ['./reactive-forms-dynamic.component.css']
})
export class ReactiveFormsDynamicComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup = new FormGroup({});

  constructor() {}

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  get marksControls() {
    return (<FormArray>this.signUpForm.get('marks')).controls;
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
      marks:new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  onRemoveHobby(index: number) {
    (<FormArray>this.signUpForm.get('hobbies')).removeAt(index);
  }

  onAddMarks(){
    const control = new FormGroup({
      "subject_name":new FormControl('',Validators.required),
      "subject_marks":new FormControl('',Validators.required)
    });
    (<FormArray>this.signUpForm.get('marks')).push(control);
  }
  onRemoveMarks(index:number){
    (<FormArray>this.signUpForm.get('marks')).removeAt(index);
  }
}
