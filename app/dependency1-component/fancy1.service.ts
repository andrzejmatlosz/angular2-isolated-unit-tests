import { Injectable } from '@angular/core';

@Injectable()
export class Fancy1Service {
    public getValue(): string {
        return 'value from fancy service 1';
    }

    public anotherMethod(): string {
        return 'smth';
    }
}
