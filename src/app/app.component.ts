import { AfterViewInit, Component } from '@angular/core';
import { fromEvent } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  ngAfterViewInit(): void {

    //convert dom event into a observable
    fromEvent(document.getElementById('click-button')!, 'click').subscribe(
      {
        next: (data)=>{console.log(data)},
        error: (error)=>{console.log(error)},
        complete:()=>{console.log("complete done!")}
      }
    )
  }
  title = 'angular-programming-practice';



}
