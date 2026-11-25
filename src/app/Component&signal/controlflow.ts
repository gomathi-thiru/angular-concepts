import { Component } from "@angular/core";

@Component({
    selector: 'app-task-list',
    standalone: true,
    template:`
    @if(tasks.length > 0){
    <ul>
    @for(task of tasks; track task.id) {
    <li>{{ task.name }}</li>
    }
    </ul>
    }
    @else {
        <p>No tasks remaining!</p>
    }`
})

export class TaskComponent{
    tasks = [
        { id:1, name: "practice signal" },
        { id:2, name: "practice component" }
    ];
}