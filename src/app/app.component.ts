import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    blocked = true;

    toggleBlocked(): void {
        this.blocked = !this.blocked;
        console.log('toggleBlocked()', this.blocked)
    }
}
