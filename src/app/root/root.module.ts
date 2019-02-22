import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { RootRoutingModule } from './root-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule
  ],
  bootstrap: [
    RootComponent
  ],
  providers: [

  ]
})
export class RootModule { }
