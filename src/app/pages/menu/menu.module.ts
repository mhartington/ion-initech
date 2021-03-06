import { NgModule } from '@angular/core';
import { MenuPage } from './menu.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [MenuPage],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MenuPage,
        children: [
          { path: '', loadChildren: '../users/users.module#UsersPageModule' },
          { path: 'user/:user', loadChildren: '../user-detail/user-detail.module#UserDetailPageModule' },

        ]
      }
    ])
  ]
})
export class MenuPageModule {}
