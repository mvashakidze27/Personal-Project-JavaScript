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
var Teachers = /** @class */ (function () {
    function Teachers() {
        this.teachers = [];
    }
    Teachers.prototype.validation = function (obj) {
        if (obj.dateOfBirth) {
            var date_Regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            if (!date_Regex.test(obj.dateOfBirth)) {
                throw 'The format of the date is not valid';
            }
        }
    };
    Teachers.prototype.add = function (data) {
        this.validation(data);
        data.teacherId = Math.floor((Math.random() + 1) * 100);
        this.teachers.push(data);
        return data.teacherId;
    };
    Teachers.prototype.read = function (teacherId) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (teacherId === this.teachers[i].teacherId) {
                console.log(this.teachers[i]);
            }
            else {
                throw 'The ID of a teacher wasn not found';
            }
        }
    };
    Teachers.prototype.update = function (teacherId, updatedProfile) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (teacherId === this.teachers[i].teacherId) {
                updatedProfile.teacherId = this.teachers[i].teacherId;
                this.teachers[i] = __assign(__assign({}, this.teachers[i]), updatedProfile);
                return updatedProfile.teacherId;
            }
            else {
                throw 'The ID of a teacher wasn not found';
            }
        }
    };
    Teachers.prototype.remove = function (teacherId) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (teacherId === this.teachers[i].teacherId) {
                this.teachers.splice(i, 1);
            }
            else {
                throw 'The ID of a teacher wasn not found';
            }
        }
    };
    return Teachers;
}());
exports["default"] = Teachers;
