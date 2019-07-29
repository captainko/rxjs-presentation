import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import { tap, map } from "rxjs/operators";

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss'],
  providers: [
    { provide: "windowObject", useValue: window}
   ]
})
export class PatternComponent implements OnInit {


  constructor(@Inject('windowObject') window) {

    // let obs = new FakeObservable();
    // window.unsub1 = obs.subscribe((data: any) => console.log(`Observer 1:`, data));
    // window.unsub2 = obs.subscribe((data: any) => console.log(`Observer 2:`, data));
    // window.unsub3 = obs.subscribe((data: any) => console.log(`Observer 3:`, data));

    // setInterval(() => {
    //   obs.notify('called');
    // }, 2000);
  }

  ngOnInit() {
    this.userInput$ = fromEvent(this.userInput.nativeElement, 'keyup').pipe(map(({ target: { value } }: any) => value));
  }

  @ViewChild('userInput', { static: true }) userInput: ElementRef;
  public userInput$: Observable<any>;

  public isSubscribed = [false, false];
  public subValues: string[] = [];
  public subs: Subscription[] = [];
  subscribe(index: number) {
    this.subs[index] = this.userInput$.subscribe((value) => { this.subValues[index] = value; console.log(value); });
    this.isSubscribed[index] = true;
  }

  unsubscribe(index: number) {
    this.subs[index].unsubscribe();
    this.isSubscribed[index] = false;
  }

}


class FakeObservable {
  public observers: any[] = [];
  public subscribe(observers: any) {
    this.observers.push(observers);
    return this.unsubscribe.bind(this, observers);
  }

  public unsubscribe(handler: any) {
    let index = this.observers.findIndex((obs) => obs === handler);
    if (index !== -1) {
      console.log('Unsubscribed from', handler);
      this.observers.splice(index, 1);
    }
  }

  public notify(data: any) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}
