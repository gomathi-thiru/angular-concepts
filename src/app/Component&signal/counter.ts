import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    standalone: true,
    template: `
    <h2>{{ title }}</h2>
    <button [disabled]="isLocked" (click)="increment()">
    Count: {{ count }}</button>`
})

export class AppCount {
    title = 'Counter Example';
    count = 0;
    isLocked = false;
    increment(){
        this.count++;
    }
}