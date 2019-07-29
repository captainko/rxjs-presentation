import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, Subscription } from 'rxjs';
import { mergeMap, switchMap, toArray } from "rxjs/operators";

const userApi = 'https://dummyapi.io/api/user/?limit=100';
const detailApi = 'https://dummyapi.io/api/user/';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  public users$: Observable<any>;
  public users: any[] = [];
  public subscription: Subscription;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  public DoubleSubscribe() {
    this.Unsubscribe();
    this.users$ = this.http.get(userApi);
    this.subscription = this.users$.subscribe(({ data }: { data: any[] }) => {
      this.users = data;
      setTimeout(() => {
        this.users.forEach((user, index) => {
          this.http.get(detailApi + user.id).subscribe((res: any) => {
            this.users[index].details = res;
          })
        });
      } /*,2000*/);
    });
  }

  public MergeToArray() {
    this.Unsubscribe();
    this.users$ = this.http.get(userApi);
    this.users$
      .pipe(
        switchMap(({ data }: { data: any[] }) => from(data)),
        mergeMap((user) => this.http.get(detailApi + user.id) /*, 1*/),
        toArray(),
      ).subscribe((data) => this.users = data);
  }

  public PushToArray() {
    this.Unsubscribe();
    this.users$ = this.http.get(userApi);
    this.users$
      .pipe(
        switchMap(({ data }: { data: any[] }) => from(data)),
        mergeMap((user) => this.http.get(detailApi + user.id)/*, 1*/),
      )
      .subscribe((data) => this.users.push(data));
  }

  private Unsubscribe() {
    this.users = [];
    this.subscription ? this.subscription.unsubscribe() : '';
  }

}
