import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableComponent } from './rxjs/observable';
import { SearchComponent } from './rxjs/pipe-operator';
import { TimerComponent } from './rxjs/destroytakeuntil';

@Component({
  imports: [RouterOutlet, ObservableComponent, SearchComponent, TimerComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
