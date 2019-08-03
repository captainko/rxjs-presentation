import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-obser',
  templateUrl: './create-obser.component.html',
  styleUrls: ['./create-obser.component.scss']
})
export class CreateObserComponent implements OnInit {
  public items = [];
  public items$: Observable<string>;
  constructor() {
    this.items$ = Observable.create((subscriber) => {
      setInterval(() => {
        subscriber.next('Hi,' + Math.random() * 100);
      }, 1000)
    })
  }

  ngOnInit() {
  }

  subscribe() {
    this.items$.subscribe((item: string) => this.items.push(item));
  }
}
