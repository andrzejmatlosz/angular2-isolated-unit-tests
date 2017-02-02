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
var fancy2_service_1 = require('./fancy2.service');
var Dependency2Component = (function () {
    function Dependency2Component(fancy2Service) {
        this.fancy2Service = fancy2Service;
    }
    Dependency2Component.prototype.ngOnInit = function () {
        this.value = this.fancy2Service.getValue();
    };
    Dependency2Component = __decorate([
        core_1.Component({
            selector: 'my-dependency2',
            template: "<h1>Hello</h1>",
        }), 
        __metadata('design:paramtypes', [fancy2_service_1.Fancy2Service])
    ], Dependency2Component);
    return Dependency2Component;
}());
exports.Dependency2Component = Dependency2Component;
//# sourceMappingURL=dependency2.component.js.map