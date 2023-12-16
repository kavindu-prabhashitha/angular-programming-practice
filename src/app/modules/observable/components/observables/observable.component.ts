import { Component } from "@angular/core";
import { from } from "rxjs";

@Component({
    selector:'app-observable-component',
    templateUrl:'./observable.component.html',
    styleUrls:['./observable.component.css']
  })
export class ObservableComponent {
    title = "rxjs-basics"

    postArray = [
      {title:"kavindu 01", description:"kavindu 01 description"},
      {title:"kavindu 02", description:"kavindu 02 description"},
      {title:"kavindu 03", description:"kavindu 03 description"},
    ]

    postsArrayObservable$ = from(this.postArray)

    promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Resolve the promise. sending data")
      },3000)
    })

    promiseObservable$ = from(this.promise)

    constructor(){
      this.postsArrayObservable$.subscribe({
        next: (data)=>{console.log(data)},
        error: (error)=>{console.log(error)},
        complete:()=>{console.log("complete done!")}
      })

      this.promiseObservable$.subscribe({
        next: (data)=>{console.log(data)},
        error: (error)=>{console.log(error)},
        complete:()=>{console.log("promise complete done!")}
      })
    }

}
