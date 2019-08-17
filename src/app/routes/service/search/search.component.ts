import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { fromEvent, Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, pluck, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchEle', { static: true }) searchEle: ElementRef;
  // public users$ : Observable<any>;
  users = [];

  constructor(private userService: UserService) {
    // this.users$ = this.userService.users$.asObservable();
    this.userService.users$.subscribe(users=> {
      console.log(users);
      this.users = users;
    })
  }

  ngOnInit() {
    this.addSearch();
  }

  addSearch() {
    fromEvent<string>(this.searchEle.nativeElement, 'keydown')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged()
      )
    .subscribe((q:string) =>this.userService.updateUsers(q))
  }
}
