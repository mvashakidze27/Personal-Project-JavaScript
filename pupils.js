"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Pupils = /** @class */ (function () {
    function Pupils() {
        this.Pupils = [];
    }
    Pupils.prototype.validation = function (obj) {
        if (obj.dateOfBirth) {
            var date_Regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            if (!date_Regex.test(obj.dateOfBirth)) {
                throw "The format of the date is not valid";
            }
        }
    };
    Pupils.prototype.add = function (data) {
        this.validation(data);
        data.id = Math.floor((Math.random() + 1) * 100);
        this.Pupils.push(data);
        return data;
    };
    Pupils.prototype.read = function (pupilId) {
        for (var i = 0; i < this.Pupils.length; i++) {
            if (pupilId === this.Pupils[i].id) {
                console.log(this.Pupils[i]);
            }
            else {
                throw "The ID of a pupil wasn not found";
            }
        }
    };
    Pupils.prototype.update = function (pupilId, updatedProfile) {
        for (var i = 0; i < this.Pupils.length; i++) {
            if (pupilId === this.Pupils[i].id) {
                updatedProfile.id = this.Pupils[i].id;
                this.Pupils[i] = __assign(__assign({}, this.Pupils[i]), updatedProfile);
                return updatedProfile.id;
            }
            else {
                throw "The ID of a pupil wasn not found";
            }
        }
    };
    Pupils.prototype.remove = function (pupilId) {
        for (var i = 0; i < this.Pupils.length; i++) {
            if (pupilId === this.Pupils[i].id) {
                this.Pupils.splice(i, 1);
            }
            else {
                throw "The ID of a pupil wasn not found";
            }
        }
    };
    return Pupils;
}());
exports["default"] = Pupils;
