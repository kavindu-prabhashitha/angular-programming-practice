import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-dynamic',
  templateUrl: './reactive-forms-dynamic.component.html',
  styleUrls: ['./reactive-forms-dynamic.component.css']
})
export class ReactiveFormsDynamicComponent implements OnInit {
  genders = ['male', 'female'];
  restrictedNames=['Kavindu',"Don"];
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
        username: new FormControl('',[Validators.required, this.isRestrictedNames.bind(this)]),
        email: new FormControl('', [Validators.email, Validators.required],this.isRestrictedEmails),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
      marks:new FormArray([])
    });

    this.signUpForm.valueChanges.subscribe((value)=>{
      console.log("value changes : ",value)
    })

    //status of each form individual form control your working on
    this.signUpForm.statusChanges.subscribe((value)=>{
      console.log("status changes : ",value)
    })
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


  isRestrictedNames(control:FormControl):{[s:string]:boolean}|null{
    if(this.restrictedNames.includes(control.value)){
      return {nameIsRestricted:true};
    }
    return null;
  }


  isRestrictedEmails(control:AbstractControl):Promise<any>| Observable<any>{
    let promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === "test@gmail.com"){
          resolve({emailIsRestricted:true})
        }else{
          resolve(null)
        }
      },3000)
    })

    return promise
  }

  autoFillFormData(){
    this.signUpForm.patchValue({
      "userData":{
        username:"KavinduPrabha",
        "email":"kavindu@gmail.com"
      }
    })
  }

}
