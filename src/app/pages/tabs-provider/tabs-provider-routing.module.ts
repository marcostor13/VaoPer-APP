import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TabsProviderComponent } from './tabs-provider.component';

const routes: Routes = [

  {
    path: 'tabs-provider',
    component: TabsProviderComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'profile-provider',
        loadChildren: () => import('./profile-provider/profile-provider.module').then(m => m.ProfileProviderPageModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioPageModule)
      },
      {
        path: 'chat-provider/:id',
        loadChildren: () => import('./chat-provider/chat-provider.module').then(m => m.ChatProviderPageModule)
      },      
      {
        path: 'config-provider',
        loadChildren: () => import('./config-provider/config-provider.module').then(m => m.ConfigProviderPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs-provider/dashboard',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-provider/dashboard',
    pathMatch: 'full'
  }, 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsProviderRoutingModule { }
