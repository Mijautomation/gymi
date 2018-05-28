import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityManagementPage } from './activity-management';

@NgModule({
  declarations: [
    ActivityManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityManagementPage),
  ],
})
export class ActivityManagementPageModule {}
