import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
        <h1 class="header">
            {{title}}
        </h1>
    `,
})
export class HeaderComponent  {
    title: string = 'TEST';
}
