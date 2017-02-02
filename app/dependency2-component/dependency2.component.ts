import { Component, OnInit } from '@angular/core';
import { Fancy2Service } from './fancy2.service';

@Component({
    selector: 'my-dependency2',
    template: `<h1>Hello</h1>`,
})
export class Dependency2Component implements OnInit {
    value: string;

    constructor(private fancy2Service: Fancy2Service) {
    }

    ngOnInit(): void {
        this.value = this.fancy2Service.getValue();
    }
}
