import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<input [formControl]="searchControl" placeholder="Search...">`
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),                    // wait 300ms after user stops typing
      map(term => (term || '').trim()),     // map transforms each  emitted value / it clean the whitespace
      filter(term => term.length > 2),      // ignore short length of the queries
      distinctUntilChanged(),               // don't emit if value hasn't changed
      tap(term => console.log('Searching for:', term)) // side effects without altering yhe stream
    ).subscribe();
  }
}
