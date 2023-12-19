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
import { TakeOperatorComponent } from "./pages/take-operator/take-operator.component";
import { ImageDownloaderComponent } from './pages/image-downloader/image-downloader.component';
import { CommonModule } from "@angular/common";

const components =[
  ObservableComponent,
  NewObservableComponent,
  FunctionObservableComponent,
  CancellingObservableComponent,
  BufferCountOperatorComponent,
  BufferToggleOperatorComponent,
  BufferWhenOperatorComponent,
  OperatorsComponent,
  TakeOperatorComponent
]



@NgModule({
  declarations:[
    ...components,
    ImageDownloaderComponent
  ],
  imports:[ObservableRoutingModule, CommonModule],
  providers:[Observer4],
  exports:[
    ...components]
})
export class ObservableModule{

}
