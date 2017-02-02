import { Dependency1Component } from './dependency1.component';
import { Fancy1Service } from './fancy1.service';

describe('Dependency1Component', () => {
    let dependencyComponent: Dependency1Component;
    let fakeService = {
        getValue() {
            return 'fake value';
        }
    } as Fancy1Service;

    beforeEach(() => {
        dependencyComponent = new Dependency1Component(fakeService);
    });

    it('should create component', () => {
        expect(dependencyComponent).toBeDefined();
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toEqual('fake value');
    });
});

describe('Dependency1Component', () => {
    let dependencyComponent: Dependency1Component;
    let fakeService = new Fancy1Service();

    beforeEach(() => {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 2');
        spyOn(fakeService, 'anotherMethod');
        dependencyComponent = new Dependency1Component(fakeService);
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(fakeService.anotherMethod).not.toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});

describe('Dependency1Component', () => {
    let dependencyComponent: Dependency1Component;
    let fakeService = {
        getValue: () => {}
    } as Fancy1Service;

    beforeEach(() => {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 3');
        dependencyComponent = new Dependency1Component(fakeService);
    });

    it('should have value from service after init', () => {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 3');
    });
});
