import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ 
    providedIn: 'root' 
})

export class StateService {
  // BehaviorSubject holds state values (require an initial value 'Guest' and immediately emits the latest value to new subscribers)
  private userSubject = new BehaviorSubject<string>('Guest');
  user$ = this.userSubject.asObservable();
  // Subject - emits value only to subscribers subscribed
  private notificationSubject = new Subject<string>(); 
  notifications$ = this.notificationSubject.asObservable();

  login(username: string) {
    this.userSubject.next(username); // Updates state for all current & future subscribers
    this.notificationSubject.next(`${username} logged in!`);
  }
}