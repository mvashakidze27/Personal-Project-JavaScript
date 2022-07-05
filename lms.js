"use strict";
exports.__esModule = true;
exports.LMS = exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject(obj) {
        this.title = obj.title;
        this.lessons = obj.lessons;
        this.description = obj.description;
        this.subjectId = Math.floor((Math.random() + 1) * 100);
    }
    Subject.prototype.id = function () {
        return this.subjectId;
    };
    return Subject;
}());
exports.Subject = Subject;
var LMS = /** @class */ (function () {
    function LMS() {
        this.subjects = [];
    }
    LMS.prototype.add = function (subject) {
        if (this.subjects.length !== 0) {
            for (var i = 0; i < this.subjects.length; i++) {
                if (this.subjects[i].title === subject.title) {
                    throw "The subject that you have just added already exists";
                }
            }
            this.subjects.push(subject);
        }
        else {
            this.subjects.push(subject);
        }
    };
    LMS.prototype.remove = function (subject) {
        if (this.subjects.length !== 0) {
            for (var i = 0; i < this.subjects.length; i++) {
                if (this.subjects[i].title === subject.title) {
                    this.subjects.splice(i, 1);
                }
            }
        }
        else {
            throw "The list of subjects is empty, so removing something is impossible";
        }
    };
    LMS.prototype.verify = function (subject) {
        if (this.subjects.length !== 0) {
            for (var i = 0; i < this.subjects.length; i++) {
                if (this.subjects[i].title === subject.title) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return false;
        }
    };
    LMS.prototype.readAll = function () {
        var subjectsList = [];
        if (this.subjects.length !== 0) {
            for (var i = 0; i < this.subjects.length; i++) {
                subjectsList.push(this.subjects[i].title);
            }
            return subjectsList;
        }
        else {
            throw "The list of subjects is empty";
        }
    };
    return LMS;
}());
exports.LMS = LMS;
