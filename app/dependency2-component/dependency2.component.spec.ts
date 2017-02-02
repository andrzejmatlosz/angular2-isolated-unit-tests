import { Dependency2Component } from './dependency2.component';
import { Fancy2Service } from './fancy2.service';
import { Fancy1Service } from './../dependency1-component/fancy1.service';

describe('Dependency2Component', () => {
    let dependencyComponent: Dependency2Component;
    let fakeService = {
        getValue() {
            return 'fake value';
        }
    } as Fancy2Service;

    beforeEach(() => {
        dependencyComponent = new Dependency2Component(fakeService);
    });

    it('should create component', () => {
        expect(dependencyComponent).toBeDefined();
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toEqual('fake value');
    });
});

describe('Dependency2Component', () => {
    let dependencyComponent: Dependency2Component;
    let fakeService = new Fancy2Service({} as Fancy1Service);

    beforeEach(() => {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 2');
        spyOn(fakeService, 'anotherMethod');
        dependencyComponent = new Dependency2Component(fakeService);
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(fakeService.anotherMethod).not.toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});

describe('Dependency2Component', () => {
    let dependencyComponent: Dependency2Component;
    let fakeService = {
        getValue: () => {}
    } as Fancy2Service;

    beforeEach(() => {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 3');
        dependencyComponent = new Dependency2Component(fakeService);
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 3');
    });
});
