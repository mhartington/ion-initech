import { NgModule } from '@angular/core';
import { UsersPage } from './users.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes/pipes.module'
@NgModule({
  declarations: [UsersPage],
  imports: [
    IonicModule,
    CommonModule,
    PipeModule,
    RouterModule.forChild([{ path: '', component: UsersPage }])
  ]
})
export class UsersPageModule {}
