"use strict";
exports.__esModule = true;
var Gradebooks = /** @class */ (function () {
    function Gradebooks(groups, teachers, lms) {
        this.gradebooks = [];
        this.teachers = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    Gradebooks.prototype.add = function (level, groupID) {
        var gradebookId = Math.floor((Math.random() + 1) * 100);
        this.gradebooks.push({ gradebookId: gradebookId, level: level, groupID: groupID });
        return gradebookId;
    };
    Gradebooks.prototype.clear = function () {
        this.gradebooks = [];
    };
    Gradebooks.prototype.addRecord = function (gradebookId, record) {
        for (var i = 0; i < this.gradebooks.length; i++) {
            if (gradebookId === this.gradebooks[i].gradebookId) {
                this.gradebooks[i].record = record;
            }
        }
    };
    Gradebooks.prototype.read = function (gradebookId, pupilId) {
        var _a, _b, _c, _d, _e, _f;
        var pupilName = {
            first: "",
            last: ""
        };
        var teacherName = {
            first: "",
            last: ""
        };
        var teacherSubject = {
            subject: []
        };
        var lesson;
        var mark;
        for (var i = 0; i < this.groups.getGroups().length; i++) {
            for (var a = 0; a < this.groups.getGroups()[i].pupils.length; a++) {
                if (pupilId === this.groups.getGroups()[i].pupils[a].id) {
                    pupilName.first = this.groups.getGroups()[i].pupils[a].name.first;
                    pupilName.last = this.groups.getGroups()[i].pupils[a].name.last;
                }
            }
        }
        for (var i = 0; i < this.gradebooks.length; i++) {
            if (gradebookId === this.gradebooks[i].gradebookId) {
                lesson = (_b = (_a = this.gradebooks[i]) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.lesson;
                mark = (_d = (_c = this.gradebooks[i]) === null || _c === void 0 ? void 0 : _c.record) === null || _d === void 0 ? void 0 : _d.mark;
                for (var a = 0; a < this.teachers.length; a++) {
                    if (((_f = (_e = this.gradebooks[i]) === null || _e === void 0 ? void 0 : _e.record) === null || _f === void 0 ? void 0 : _f.teacherId) === this.teachers[a].teacherId) {
                        teacherName.first = this.teachers[a].name.first;
                        teacherName.last = this.teachers[a].name.last;
                        teacherSubject.subject = this.teachers[a].subjects;
                    }
                }
            }
        }
        return {
            name: pupilName.first,
            pupilName: pupilName,
            : .last,
            records: [
                { teacher: { teacherName: teacherName, : .first } }, { teacherName: teacherName, : .last },
                subject, teacherSubject.subject[0].subject,
                lesson, lesson,
                mark, mark,
            ]
        };
    };
    return Gradebooks;
}());
exports["default"] = Gradebooks;
