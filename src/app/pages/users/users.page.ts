import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements AfterViewInit {
  public users: any;
  public usePlaceholder = true;
  public holder = Array.from(Array(21).keys());
  constructor(private userService: RandomUserService, private router: Router) {}

  ngAfterViewInit() {
    this.userService
      .getUsers()
      .pipe(delay(1000))
      .subscribe(
        (res: any) => (this.users = res),
        err => console.log(err),
        () => (this.usePlaceholder = false)
      );
  }
  naviagte(user) {
    this.router.navigate(['user', JSON.stringify(user)]);
  }
  identify(index, item) {
    return index;
  }
}
