import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ControlComponent } from './components/control/control.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ControlComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
