import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, Subscription, interval } from 'rxjs';
import { mergeMap, switchMap, toArray, delay, map, tap } from "rxjs/operators";
import { shareAndCache } from 'src/app/operators/share-and-cache.operator';

const userApi = 'https://dummyapi.io/api/user/?limit=100';
const detailApi = 'https://dummyapi.io/api/user/';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  public users$: Observable<any> = this.http.get(userApi);
  public users: any[] = [];
  public subscription: Subscription;
  public time$: any;


  constructor(private http: HttpClient,) {
  }

  ngOnInit() {
  }

  public DoubleSubscribe() {
    this.Unsubscribe();

    this.subscription = this.users$.subscribe(({ data }: { data: any[] }) => {
      this.users = data;
      console.log(this.users);
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
    this.users$
      .pipe(
        switchMap(({ data }: { data: any[] }) => from(data)),
        mergeMap((user) => this.http.get(detailApi + user.id)/*,1*/),
        toArray(),
        shareAndCache('user')
      ).subscribe((data) => this.users = data);
  }

  public PushToArray() {
    this.Unsubscribe();
    this.users = [];
    this.users$
      .pipe(
        switchMap(({ data }: { data: any[] }) => from(data)),
        mergeMap((user) => this.http.get(detailApi + user.id) /*, 1*/),
      )
      .subscribe((data) => this.users.push(data));
  }

  public trackById(index, user) {
    return user.id;
  }

  private Unsubscribe() {
    // this.users = [];
    this.subscription ? this.subscription.unsubscribe() : '';
  }


}
