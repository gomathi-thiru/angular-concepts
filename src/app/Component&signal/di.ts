import { Component, Injectable, inject } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LoggerService {
    log(msg: string){
        console.log(`App log: ${msg}`);
    }
}

@Component({
    selector: 'app-logger',
    standalone: true,
    template: `<button (click)="triggerLog()">Log message</button>`
})

export class AppLoggerComponent {
    private logger = inject(LoggerService);

    triggerLog(){
        this.logger.log('Button was clicked!');
    }
}