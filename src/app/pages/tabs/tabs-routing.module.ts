import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'featured',
                loadChildren: () => import('./featured/featured.module').then(m => m.FeaturedPageModule)
            },
            {
                path: 'chat/:id',
                loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
            },
            {
                path: 'config',
                loadChildren: () => import('./config/config.module').then(m => m.ConfigPageModule)
            },
            {
                path: '',
                redirectTo: 'tabs/home',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
