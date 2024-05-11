import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class ComponentsModule { }
