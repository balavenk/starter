import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationComponent } from './organization/organization.component';
import { ProjectsComponent } from './projects/projects.component';

import { SubscriptionComponent } from './subscription/subscription.component';
import { QuotaallocationComponent } from './quotaallocation/quotaallocation.component';
import { EAManagementComponent } from './EAManagement/EAManagement.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'organization',
      component: OrganizationComponent,
    },{
      path: 'projects',
      component: ProjectsComponent,
    },{
      path: 'subscription',
      component: SubscriptionComponent,
    },{
      path: 'quotaallocation',
      component: QuotaallocationComponent,
    },{
      path: 'EAManagement',
      component: EAManagementComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
