import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from 'src/app/modules/observable/services/Observer4';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit{
  ngOnInit(){
    const newObservable = new Observable<number>(observer =>{
      for(let i=0; i<4;i++){
        if(i == 4){
          observer.error(`unknown error. i value is ${i}` )
        }
        observer.next(i)
      }

      observer.complete();
    })

    //method 01 of subscribing to a observable

    let observer = {
      next: (data:number) => console.log(data),
      error: (error:string) => console.log(error),
      complete: () => console.log("complete all done")
    }

    newObservable.subscribe(observer)

    //method 02 of subscribing to a observables
    newObservable.subscribe({
      next: (data:number) => console.log("observable ",data + " 02"),
      error: (error:string) => console.log(error+ "02"),
      complete: () => console.log("complete all done")
    })

    // function signature deprecated
    // newObservable.subscribe(
    //   (data)=>{
    //     console.log("observer 03 creation"+ data)
    //   },
    //   (error)=>{console.log(error)},
    //   ()=>{console.log("complete done")},
    // )

    //class based method
    newObservable.subscribe(new Observer4())

  }



}
