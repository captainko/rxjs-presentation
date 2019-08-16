import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const userApi = 'https://dummyapi.io/api/user/?limit=100';
const userDetailApi = (userId: string|number) => 'https://dummyapi.io/api/user/' + userId;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getAllUsers$ = this.http.get(userApi);

  constructor(private http: HttpClient) {}
  public getUserDetail (userId: string|number) {
    return this.http.get(userDetailApi(userId));
  }

  getRandom() {
    return interval(1000).pipe(map(_=> Date.now()))
  }
}
