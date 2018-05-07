import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressionPage } from './progression';

@NgModule({
  declarations: [
    ProgressionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressionPage),
  ],
})
export class ProgressionPageModule {}
