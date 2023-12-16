import { NgModule } from "@angular/core";
import { ObservableComponent } from "./components/observables/observable.component";
import { NewObservableComponent } from "./components/new-observable/new-observable.component";
import { Observer4 } from "src/app/modules/observable/services/Observer4";
import { FunctionObservableComponent } from "./components/function-observable/function-observable.component";
import { CancellingObservableComponent } from "./components/cancelling-observable/cancelling-observable.component";


@NgModule({
  declarations:[
    ObservableComponent,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent
  ],
  imports:[],
  providers:[Observer4],
  exports:[
    ObservableComponent,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent]
})
export class ObservableModule{

}
