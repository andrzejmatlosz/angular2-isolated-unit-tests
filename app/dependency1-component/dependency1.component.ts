import { Component, OnInit } from '@angular/core';
import { Fancy1Service } from './fancy1.service';

@Component({
    selector: 'my-dependency1',
    template: `<h1>Hello</h1>`,
})
export class Dependency1Component implements OnInit {
    value: string;

    constructor(private fancy1Service: Fancy1Service) {
    }

    ngOnInit(): void {
        this.value = this.fancy1Service.getValue();
    }
}
