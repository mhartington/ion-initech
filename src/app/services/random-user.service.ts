import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor(public http: HttpClient) {}
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=51').pipe(
      map((res: any) => res.results),
      map((res: any[]) => {
        return res.map(user => {
          return { ...user, mikeID: (Math.floor(Math.random() * 1000) + 1  ) };
        });
      })
    );
  }
}
