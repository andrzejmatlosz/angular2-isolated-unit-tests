import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>
    <my-user-info></my-user-info>
  `,
})
export class AppComponent  { name = 'Angular'; }
