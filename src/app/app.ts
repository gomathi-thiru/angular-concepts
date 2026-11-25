import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from './rxjs/observable';
import { SearchComponent } from './rxjs/pipe-operator';
import { TimerComponent } from './rxjs/destroytakeuntil';
import { AppCount } from './Component&signal/counter';
import { CartComponent } from './Component&signal/signal.cart';
import { TaskComponent } from './Component&signal/controlflow';
import { AppLoggerComponent } from './Component&signal/di';

@Component({
  imports: [RouterOutlet, ObservableComponent, SearchComponent, TimerComponent, AppCount, CartComponent, TaskComponent, AppLoggerComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
