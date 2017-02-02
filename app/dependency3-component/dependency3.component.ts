import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fancy3Service } from './fancy3.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-dependency3',
    template: `<h1>Hello</h1>`,
})
export class Dependency3Component implements OnInit, OnDestroy {
    public value: string;
    private subscription: Subscription;

    constructor(private fancy3Service: Fancy3Service) {
    }

    ngOnInit(): void {
        this.subscription = this.fancy3Service.getValue().subscribe((value: string) => {
            this.value = value;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
