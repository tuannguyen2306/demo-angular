import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DesktopLayoutComponent,
        children: [
            {
                path: 'demo',
                loadChildren: './modules/demo/demo.module#DemoModule'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
