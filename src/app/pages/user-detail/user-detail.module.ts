import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes/pipes.module'
import { UserDetailPage } from './user-detail.page';
@NgModule({
  declarations: [UserDetailPage],
  imports: [
    IonicModule,
    CommonModule,
    PipeModule,
    RouterModule.forChild([{ path: '', component:  UserDetailPage}])
  ]
})
export class UserDetailPageModule {}
