import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from '../shared/ngrx/reducers/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from '../shared/ngrx/effects/employee.effect';
import { EmployeeService } from '../shared/services/employee.service';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { BlogListEffect } from '../shared/ngrx/effects/blog-list.effect';
import { blogListReducer } from '../shared/ngrx/reducers/blog-list.reducer';
import { BlogListService } from '../shared/services/blog-list.service';

@NgModule({
  declarations: [
    DesktopLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    StoreModule.forRoot({
      employee: employeeReducer,
      bloglist: blogListReducer
    }),
    EffectsModule.forRoot([
      EmployeeEffect,
      BlogListEffect
    ])
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  providers: [
    EmployeeService,
    BlogListService
  ]
})
export class ApplicationsModule { }
