import { Observable } from "rxjs";

export function functionObs(){
  console.log("Function call");
  return "1";
  return "2"; //dead code
}


export const funcObservable = new Observable(observer =>{
  console.log("observable call")
  observer.next('1')
  observer.next('2')

  setTimeout(()=>{
    observer.next(3)
  },5000)
})

//FUNCTIONS
// 1. Sequential Processing

// OBSERVABLES
// 1. Returns multiple values
// 2. Handle Asynchronous Data


//OBSERVABLE vs FUNCTIONS
// 1. observables are like functions with zero arguments
// but its generalized to emit multiple values., where as functions allows o return one value
