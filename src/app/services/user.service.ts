import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
