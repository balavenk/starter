import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { OrganizationModule } from './organization/organization.module';
import { ProjectsModule } from './projects/projects.module';
import {MatSliderModule} from '@angular/material/slider';
import { SubscriptionModule } from './subscription/subscription.module';
import { QuotaallocationModule } from './quotaallocation/quotaallocation.module';
import { EAManagementModule } from './EAManagement/EAManagement.module';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,OrganizationModule,ProjectsModule,
    MatSliderModule,SubscriptionModule,QuotaallocationModule,
    EAManagementModule
  ],
  declarations: [
    PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
