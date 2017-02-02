import { Injectable } from '@angular/core';
import { Fancy1Service } from './../dependency1-component/fancy1.service';

@Injectable()
export class Fancy2Service {
    constructor(private fancy1Service: Fancy1Service) {
    }

    public getValue(): string {
        return this.fancy1Service.getValue() + 'value from fancy service 1';
    }

    public anotherMethod(): string {
        return 'smth';
    }
}
