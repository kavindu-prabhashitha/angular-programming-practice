import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { ImageDownloaderComponent } from './pages/image-downloader/image-downloader.component';


const routes: Routes = [
  {
    path:'',
    component:OperatorsComponent,
    children:[
      { path:'buffer', component:BufferOperatorComponent},
      { path:'buffercount', component:BufferCountOperatorComponent},
      { path:'buffertime', component:BufferTimeOperatorComponent},
      { path:'buffertoggle', component:BufferToggleOperatorComponent},
      { path:'bufferwhen', component:BufferWhenOperatorComponent},
      { path:'image-download', component:ImageDownloaderComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
