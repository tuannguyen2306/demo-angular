import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './components/control/control.component';
import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    ControlComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogListRoutingModule
  ]
})
export class BlogListModule { }
