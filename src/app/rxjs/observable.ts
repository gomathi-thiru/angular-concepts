import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
    selector: 'app-observable',
    template: '',
})

export class ObservableComponent implements OnInit, OnDestroy {
private sub!: Subscription;

  ngOnInit() {
    const numberStream$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        observer.complete();
      }, 1000);
    });

    this.sub = numberStream$.subscribe({
      next: (val) => console.log('Received:', val),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Stream completed')
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}