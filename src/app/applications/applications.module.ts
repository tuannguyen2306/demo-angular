import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from '../shared/ngrx/reducers/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from '../shared/ngrx/effects/employee.effect';
import { EmployeeService } from '../shared/services/employee.service';

@NgModule({
  declarations: [
    DesktopLayoutComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    StoreModule.forRoot({
      employee: employeeReducer
    }),
    EffectsModule.forRoot([
      EmployeeEffect
    ])
  ],
  providers: [
    EmployeeService
  ]
})
export class ApplicationsModule { }
