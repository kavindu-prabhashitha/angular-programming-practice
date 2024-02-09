import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{

  genders = ['male','female']
  signUpForm: FormGroup = new FormGroup({});

  constructor(){

  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      "userData":new FormGroup({
        'username':new FormControl('',Validators.required),
        'email':new FormControl('', [Validators.email,Validators.required]),
      }),

      'gender':new FormControl('male'),
    })
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

}
