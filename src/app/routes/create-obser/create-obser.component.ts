import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-create-obser',
  templateUrl: './create-obser.component.html',
  styleUrls: ['./create-obser.component.scss']
})
export class CreateObserComponent implements OnInit {
  public items = [];
  public items$: Observable<string>;
  private _numb = 0;
  constructor() {
    this.items$ = Observable.create((subscriber) => {
      setInterval(() => {
        subscriber.next('Hi,' + Math.random() * 100);
      }, 1000)
    });

      // this.items$ = interval(1000).pipe(map(_=> 'Hi,' + Math.floor(Math.random() * 100)))

  }

  ngOnInit() {
  }

  subscribe() {
    let numb = this._numb++;
    this.items$.subscribe((item: string) => this.items.push(`${numb} says: `, item));
  }
}
