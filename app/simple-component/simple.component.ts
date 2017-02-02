import { Component } from '@angular/core';

@Component({
    selector: 'my-simple',
    template: `<h1>Hello</h1>`,
})
export class SimpleComponent  {
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}
