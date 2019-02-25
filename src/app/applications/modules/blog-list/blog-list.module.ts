import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './components/control/control.component';
import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ControlComponent,
    BlogComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogListRoutingModule,
    RouterModule
  ]
})
export class BlogListModule { }
