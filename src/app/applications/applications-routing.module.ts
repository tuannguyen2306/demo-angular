import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'blog-list',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DesktopLayoutComponent,
        children: [
            {
                path: 'blog-list',
                loadChildren: './modules/blog-list/blog-list.module#BlogListModule'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
