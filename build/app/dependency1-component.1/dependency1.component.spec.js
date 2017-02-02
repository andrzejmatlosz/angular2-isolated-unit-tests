"use strict";
var dependency1_component_1 = require('./dependency1.component');
var fancy1_service_1 = require('./fancy1.service');
describe('SimpleComponent', function () {
    var dependencyComponent;
    var fakeService = {
        getValue: function () {
            return 'fake value';
        }
    };
    beforeEach(function () {
        dependencyComponent = new dependency1_component_1.Dependency1Component(fakeService);
    });
    it('should create component', function () {
        expect(dependencyComponent).toBeDefined();
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toEqual('fake value');
    });
});
describe('SimpleComponent', function () {
    var dependencyComponent;
    var fakeService = new fancy1_service_1.Fancy1Service();
    beforeEach(function () {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 2');
        spyOn(fakeService, 'anotherMethod');
        dependencyComponent = new dependency1_component_1.Dependency1Component(fakeService);
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(fakeService.anotherMethod).not.toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});
describe('SimpleComponent', function () {
    var dependencyComponent;
    var fakeService = {
        getValue: function () { }
    };
    beforeEach(function () {
        spyOn(fakeService, 'getValue').and.returnValue('fake value 2');
        dependencyComponent = new dependency1_component_1.Dependency1Component(fakeService);
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(fakeService.getValue).toHaveBeenCalled();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});
//# sourceMappingURL=dependency1.component.spec.js.map