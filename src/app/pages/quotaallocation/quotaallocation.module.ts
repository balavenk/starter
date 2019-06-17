import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { QuotaallocationComponent } from './quotaallocation.component';
import {MatSliderModule} from '@angular/material/slider';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    ThemeModule,MatSliderModule,NgxPaginationModule
  ],
  declarations: [
    QuotaallocationComponent,
  ],
})
export class QuotaallocationModule { }
