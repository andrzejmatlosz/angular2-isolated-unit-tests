import { Dependency3Component } from './dependency3.component';
import { Fancy3Service } from './fancy3.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

describe('Dependency3Component', () => {
    let dependencyComponent: Dependency3Component;
    let subject: Subject<string>;
    let fakeService: Fancy3Service;

    beforeEach(() => {
        subject = new Subject<string>();
        fakeService = {
            getValue() {
                return subject.asObservable();
            }
        } as Fancy3Service;
        dependencyComponent = new Dependency3Component(fakeService);
    });

    it('should create component', () => {
        expect(dependencyComponent).toBeDefined();
    });

    it('should NOT have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toBe(undefined);
    });

    it('should have value from service after init and retrieve value from stream', () => {
        dependencyComponent.ngOnInit();
        subject.next('fake value');
        expect(dependencyComponent.value).toEqual('fake value');
    });

    it('should execute unsubscribe when component is destroyed', () => {
        dependencyComponent['subscription'] = { unsubscribe: () => {} } as Subscription;
        spyOn(dependencyComponent['subscription'], 'unsubscribe');
        dependencyComponent.ngOnDestroy();
        expect(dependencyComponent['subscription'].unsubscribe).toHaveBeenCalled();
    });

    it('should unsubscribe prevent from change the value', () => {
        dependencyComponent.ngOnInit();
        subject.next('fake value 2');
        dependencyComponent.ngOnDestroy();
        subject.next('fake value 3');
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});

describe('Dependency3Component', () => {
    let dependencyComponent: Dependency3Component;
    let fakeService = {
        getValue: () => {
            return {
                subscribe: (handler: Function) => handler('fake value 2')
            };
        }
    } as Fancy3Service;

    beforeEach(() => {
        dependencyComponent = new Dependency3Component(fakeService);
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});
