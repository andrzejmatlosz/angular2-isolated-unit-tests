"use strict";
var dependency2_component_1 = require('./dependency2.component');
var fancy2_service_1 = require('./fancy2.service');
describe('Dependency2Component', function () {
    var dependencyComponent;
    var fakeService = {
        getValue: function () {
            return 'fake value';
        }
    };
    beforeEach(function () {
        dependencyComponent = new dependency2_component_1.Dependency2Component(fakeService);
    });
    it('should create component', function () {
        expect(dependencyComponent).toBeDefined();
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toEqual('fake value');
    });
});
describe('Dependency2Component', function () {
    var dependencyComponent;
    var fakeService = new fancy2_service_1.Fancy2Service({});
    beforeEach(function () {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 2');
        spyOn(fakeService, 'anotherMethod');
        dependencyComponent = new dependency2_component_1.Dependency2Component(fakeService);
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(fakeService.anotherMethod).not.toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});
describe('Dependency2Component', function () {
    var dependencyComponent;
    var fakeService = {
        getValue: function () { }
    };
    beforeEach(function () {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 3');
        dependencyComponent = new dependency2_component_1.Dependency2Component(fakeService);
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 3');
    });
});
//# sourceMappingURL=dependency2.component.spec.js.map