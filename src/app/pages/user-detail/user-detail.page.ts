import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
declare var cordova: any;
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss']
})
export class UserDetailPage implements OnInit {
  public user: any;
  public isFavorite = false;
  public favoriteIcon = 'star-outline';
  constructor(
    public events: Events,
    public storage: Storage,
    public toastCtrl: ToastController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (window['cordova']) {
      window.open = cordova.InAppBrowser.open;
    }
    this.user = JSON.parse(this.route.snapshot.params.user);
    this.checkStorage();
  }
  checkStorage() {
    this.storage.get(this.user.mikeID).then(res => {
      if (!res) {
        this.isFavorite = false;
        this.favoriteIcon = 'star-outline';
      } else {
        this.isFavorite = true;
        this.favoriteIcon = 'star';
      }
    });
  }
  toggleFavorites() {
    const addedToast = {
      message: 'User added to Favorites',
      duration: 3000,
      position: 'bottom'
    };
    const removedToast = {
      message: 'User remove to Favorites',
      duration: 3000,
      position: 'bottom'
    };
    if (!this.isFavorite) {
      this.toastCtrl.create(addedToast).then(toast => toast.present());
      this.isFavorite = true;
      this.favoriteIcon = 'star';
      this.storage.set(this.user.mikeID, this.user);
      this.events.publish('userAdded', this.user);
    } else {
      this.toastCtrl.create(removedToast).then(toast => toast.present());
      this.storage.remove(this.user.mikeID);
      this.isFavorite = false;
      this.favoriteIcon = 'star-outline';
      this.events.publish('userRemoved', this.user);
    }
  }
  openMail() {
    if (window['cordova']) {
      window.open(
        `mailto:${
          this.user.email
        }?Subject=Potential%20for%20a%20new%20career%3F&Body=Hello%20there%21%20`,
        '_system'
      );
    } else {
      window.location.href = `mailto:${
        this.user.email
      }?Subject=Potential%20for%20a%20new%20career%3F&Body=Hello%20there%21%20`;
    }
  }
}
