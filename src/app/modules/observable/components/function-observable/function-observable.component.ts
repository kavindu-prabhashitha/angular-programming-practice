import { Component } from "@angular/core";
import { funcObservable, functionObs } from "src/app/modules/observable/services/Function";

@Component({
  selector:'app-function-observable',
  templateUrl:'./function-observable.component.html',
  styleUrls:['./function-observable.component.css']
})
export class FunctionObservableComponent{

  constructor(){
    console.log("before function")
    console.log(functionObs())
    console.log(functionObs())
    console.log(functionObs())
    console.log("after function")

    console.log("before observable")
    funcObservable.subscribe((data)=>{console.log(data)})
    funcObservable.subscribe((data)=>{console.log(data)})
    funcObservable.subscribe((data)=>{console.log(data)})
    console.log("after observable")
  }
}


// before function
// Function call
// 1
// Function call
// 1
// Function call
// 1
// after function
// before observable
// observable call
// 1
// observable call
// 1
// observable call
// 1
// after observable
