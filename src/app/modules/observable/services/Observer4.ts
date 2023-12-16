import { Injectable } from "@angular/core"
import {  Observer } from "rxjs"

@Injectable()
export class Observer4 implements Observer<number>{
  next(data:number){
    console.log("Observer 04 "+ data)
  }

  error(error:string){
    console.log("Observer 04 "+ error)
  }

  complete(){
    console.log("observable 04 completed by class")
  }

}
