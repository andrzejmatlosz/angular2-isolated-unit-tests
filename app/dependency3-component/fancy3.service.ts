import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Fancy3Service {
    constructor(private http: Http) {
    }

    public getValue(): Observable<string> {
        return this.http.get('http://example.com').map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    public anotherMethod(): string {
        return 'smth';
    }
}
