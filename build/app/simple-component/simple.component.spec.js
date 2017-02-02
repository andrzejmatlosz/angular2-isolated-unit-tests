"use strict";
var simple_component_1 = require('./simple.component');
describe('SimpleComponent', function () {
    var simpleComponent;
    beforeEach(function () {
        simpleComponent = new simple_component_1.SimpleComponent();
    });
    it('should create component', function () {
        expect(simpleComponent).toBeDefined();
    });
    it('should details be hidden on the begining', function () {
        expect(simpleComponent.showDetails).toBe(false);
    });
    it('should details be visible after toggle', function () {
        simpleComponent.toggleDetails();
        expect(simpleComponent.showDetails).toBe(true);
    });
});
//# sourceMappingURL=simple.component.spec.js.map