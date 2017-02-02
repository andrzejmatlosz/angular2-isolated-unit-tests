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
var fancy1_service_1 = require('./../dependency1-component/fancy1.service');
var Fancy2Service = (function () {
    function Fancy2Service(fancy1Service) {
        this.fancy1Service = fancy1Service;
    }
    Fancy2Service.prototype.getValue = function () {
        return this.fancy1Service.getValue() + 'value from fancy service 1';
    };
    Fancy2Service.prototype.anotherMethod = function () {
        return 'smth';
    };
    Fancy2Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [fancy1_service_1.Fancy1Service])
    ], Fancy2Service);
    return Fancy2Service;
}());
exports.Fancy2Service = Fancy2Service;
//# sourceMappingURL=fancy2.service.js.map