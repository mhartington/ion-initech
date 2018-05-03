import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import env from '../environment/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__initech'
    }),
    RouterModule.forRoot(
      [{ path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' }],
      { useHash: true }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: env.name === 'production'
    })
  ],
  providers: [StatusBar],
  bootstrap: [AppComponent]
})
export class AppModule {}
