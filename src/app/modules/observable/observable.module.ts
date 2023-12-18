import { NgModule } from "@angular/core";
import { ObservableComponent } from "./components/observables/observable.component";
import { NewObservableComponent } from "./components/new-observable/new-observable.component";
import { Observer4 } from "src/app/modules/observable/services/Observer4";
import { FunctionObservableComponent } from "./components/function-observable/function-observable.component";
import { CancellingObservableComponent } from "./components/cancelling-observable/cancelling-observable.component";
import { ObservableRoutingModule } from "./observable-routing.module";
import { BufferCountOperatorComponent } from "./pages/buffer-count-operator/buffer-count-operator.component";
import { BufferToggleOperatorComponent } from "./pages/buffer-toggle-operator/buffer-toggle-operator.component";
import { BufferWhenOperatorComponent } from "./pages/buffer-when-operator/buffer-when-operator.component";
import { OperatorsComponent } from "./pages/operators/operators.component";

const components =[
  ObservableComponent,
  NewObservableComponent,
  FunctionObservableComponent,
  CancellingObservableComponent,
  BufferCountOperatorComponent,
  BufferToggleOperatorComponent,
  BufferWhenOperatorComponent,
  OperatorsComponent
]



@NgModule({
  declarations:[
    ...components
  ],
  imports:[ObservableRoutingModule],
  providers:[Observer4],
  exports:[
    ...components]
})
export class ObservableModule{

}
