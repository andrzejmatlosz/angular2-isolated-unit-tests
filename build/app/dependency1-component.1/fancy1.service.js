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
var Fancy1Service = (function () {
    function Fancy1Service() {
    }
    Fancy1Service.prototype.getValue = function () {
        return 'value from fancy service 1';
    };
    Fancy1Service.prototype.anotherMethod = function () {
        return 'smth';
    };
    Fancy1Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Fancy1Service);
    return Fancy1Service;
}());
exports.Fancy1Service = Fancy1Service;
//# sourceMappingURL=fancy1.service.js.map