import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private plt: Platform, public statusBar: StatusBar) {
    this.plt.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
