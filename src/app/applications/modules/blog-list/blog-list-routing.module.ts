import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './components/control/control.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'blog-list',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ControlComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogListRoutingModule { }