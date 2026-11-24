import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({ 
    selector: 'app-timer', 
    template: '' 
})

export class TimerComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))  //automatically completes a stream tied to the component's lifecycle without needing ngOnDestroy
      .subscribe(count => console.log(count));
  }
}
