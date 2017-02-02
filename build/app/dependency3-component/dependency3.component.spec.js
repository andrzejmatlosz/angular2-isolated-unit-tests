"use strict";
var dependency3_component_1 = require('./dependency3.component');
var Subject_1 = require('rxjs/Subject');
describe('Dependency3Component', function () {
    var dependencyComponent;
    var subject;
    var fakeService;
    beforeEach(function () {
        subject = new Subject_1.Subject();
        fakeService = {
            getValue: function () {
                return subject.asObservable();
            }
        };
        dependencyComponent = new dependency3_component_1.Dependency3Component(fakeService);
    });
    it('should create component', function () {
        expect(dependencyComponent).toBeDefined();
    });
    it('should NOT have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toBe(undefined);
    });
    it('should have value from service after init and retrieve value from stream', function () {
        dependencyComponent.ngOnInit();
        subject.next('fake value');
        expect(dependencyComponent.value).toEqual('fake value');
    });
    it('should execute unsubscribe when component is destroyed', function () {
        dependencyComponent['subscription'] = { unsubscribe: function () { } };
        spyOn(dependencyComponent['subscription'], 'unsubscribe');
        dependencyComponent.ngOnDestroy();
        expect(dependencyComponent['subscription'].unsubscribe).toHaveBeenCalled();
    });
    it('should unsubscribe prevent from change the value', function () {
        dependencyComponent.ngOnInit();
        subject.next('fake value 2');
        dependencyComponent.ngOnDestroy();
        subject.next('fake value 3');
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});
describe('Dependency3Component', function () {
    var dependencyComponent;
    var fakeService = {
        getValue: function () {
            return {
                subscribe: function (handler) { return handler('fake value 2'); }
            };
        }
    };
    beforeEach(function () {
        dependencyComponent = new dependency3_component_1.Dependency3Component(fakeService);
    });
    it('should have value from service after init', function () {
        dependencyComponent.ngOnInit();
        expect(dependencyComponent.value).toEqual('fake value 2');
    });
});
//# sourceMappingURL=dependency3.component.spec.js.map