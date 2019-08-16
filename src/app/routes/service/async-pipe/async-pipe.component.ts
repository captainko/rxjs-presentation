import { Component, OnInit } from '@angular/core';
import { switchMap, mergeMap, toArray, tap } from 'rxjs/operators';
import { Observable, Subscription, from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {
  public users$ : Observable<any>;
  public users: any[] = [];
  public subscription: Subscription;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getAllUsers$
    .pipe(
      switchMap(({ data }: { data: any[] }) => from(data)),
      mergeMap((user) => this.userService.getUserDetail(user.id)/*,1*/),
      toArray(),
      tap(() => console.log('subscribe')),
    )
   }

  ngOnInit() {

  }



  public trackById(index, user) {
    return user.id;
  }

}
