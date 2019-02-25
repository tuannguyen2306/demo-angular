import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './components/control/control.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'control',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ControlComponent,
        children: [
            {
                path: 'blog-list',
                component: BlogComponent,
            },
            {
                path: 'blog-detail',
                component: BlogDetailComponent
            }
        ]
    },
    // {
    //     path: 'blog-list',
    //     component: BlogComponent,
    // },
    // {
    //     path: 'blog-detail',
    //     component: BlogDetailComponent
    // }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogListRoutingModule { }