"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var fancy1_service_1 = require('./fancy1.service');
var Dependency1Component = (function () {
    function Dependency1Component(fancy1Service) {
        this.fancy1Service = fancy1Service;
    }
    Dependency1Component.prototype.ngOnInit = function () {
        this.value = this.fancy1Service.getValue();
    };
    Dependency1Component = __decorate([
        core_1.Component({
            selector: 'my-simple',
            template: "<h1>Hello</h1>",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof fancy1_service_1.Fancy1Service !== 'undefined' && fancy1_service_1.Fancy1Service) === 'function' && _a) || Object])
    ], Dependency1Component);
    return Dependency1Component;
    var _a;
}());
exports.Dependency1Component = Dependency1Component;
//# sourceMappingURL=dependency1.component.js.map