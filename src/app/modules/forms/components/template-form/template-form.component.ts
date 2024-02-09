import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{

  @ViewChild('f') signUpForm!:NgForm;
  about=""
  submitted=false;

  user = {
    username:'',
    email:'',
    gender:'',
    about:''
  }

  constructor(){

  }

  ngOnInit(): void {

  }


  onFormSubmit(){
    console.log(this.signUpForm)
    this.submitted = true
    this.user.username = this.signUpForm.value.userData.username
    this.user.email = this.signUpForm.value.userData.email
    this.user.gender = this.signUpForm.value.gender
    this.user.about = this.signUpForm.value.about

    this.resetForm()

  }

  onInputChange(){
    console.log(this.signUpForm)
  }

  fillValues(){
    this.signUpForm.form.setValue({
      userData:{
        email:"kavindu@gmail.com",
        username:"Kavindu"
      },
      gender:"male",
      about:"About Us"
    })
  }

  patchValues(){
    this.signUpForm.form.patchValue({
      userData:{
        email:"kavindu@gmail.com",
        username:"Kavindu"
      }
    })
  }

  resetForm(){
    this.signUpForm.reset()
  }
}
