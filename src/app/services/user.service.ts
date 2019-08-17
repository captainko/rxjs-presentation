import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const userApi = 'https://dummyapi.io/api/user/?limit=100';
const userDetailApi = (userId: string | number) => 'https://dummyapi.io/api/user/' + userId;
const fbUserApi = '/users?network=facebook&key=36d303ed6d99b3d33c6dc60de20ff61a'
const searchUserApi = (q: string) => fbUserApi + '&q=' + q;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getAllUsers$ = this.http.get(userApi);

  constructor(private http: HttpClient) { }
  public getUserDetail(userId: string | number) {
    return this.http.get(userDetailApi(userId));
  }

  getRandom() {
    return interval(1000).pipe(map(_ => Date.now()))
  }


  public users$ = new BehaviorSubject([]);

  public updateUsers(q: string) {
    this.http.get<any>(searchUserApi(q)).subscribe(({ posts }) => {
      console.log(posts);
      this.users$.next(posts)

    });
  }
}
