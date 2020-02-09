import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    ModalComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ModalComponent,
    LoadingComponent,
    SuccessComponent,
    ErrorComponent,
  ]
})
export class SharedModule { }
