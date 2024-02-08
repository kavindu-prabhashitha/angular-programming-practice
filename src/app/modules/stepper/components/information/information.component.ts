import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{

  @Input() FormGroupName!: string
  form!: FormGroup;


  constructor(private rootFormGroup: FormGroupDirective){

  }

  ngOnInit(): void {
      this.form = this.rootFormGroup.control.get(this.FormGroupName) as FormGroup;
      console.log(this.form.controls)
  }



}
