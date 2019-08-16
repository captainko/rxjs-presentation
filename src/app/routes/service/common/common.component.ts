import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { switchMap, mergeMap, toArray, tap, concatAll, concat, map, pluck, mergeAll, take } from 'rxjs/operators';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  public users$: Observable<any>;
  public users: any[] = [];
  public subscription: Subscription;
  private _time = Date.now();

  constructor(private userService: UserService) {
    this.userService.getRandom().subscribe(console.log)
  }

  ngOnInit() {
    this.subscription = this.userService.getAllUsers$
      .pipe(
        pluck('data'),
        mergeAll(),
        mergeMap((user:any) => this.userService.getUserDetail(user.id)/*,1*/),
        take(20),
        toArray(),
        // tap(() => console.log('subscribe')),
      ).subscribe((users) => {this.users = users; console.log(users)});
  }



  public trackById(index, user) {
    return user.id;
  }

}
