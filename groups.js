"use strict";
exports.__esModule = true;
var Groups = /** @class */ (function () {
    function Groups() {
        this.groups = [];
    }
    Groups.prototype.add = function (data) {
        // this.currentGroup = {};
        this.groupId = Math.floor((Math.random() + 1) * 100);
        this.currentGroup.room = data;
        this.currentGroup.pupils = [];
        this.currentGroup.groupId = this.groupId;
        this.groups.push(this.currentGroup);
        return this.groupId;
    };
    Groups.prototype.addPupil = function (groupId, pupil) {
        for (var i = 0; i < this.groups.length; i++) {
            if (groupId === this.groups[i].groupId) {
                this.groups[i].pupils.push(pupil);
            }
        }
    };
    Groups.prototype.getGroups = function () {
        return this.groups;
    };
    Groups.prototype.removePupil = function (groupId, pupilID) {
        for (var i = 0; i < this.groups.length; i++) {
            if (groupId === this.groups[i].groupId) {
                for (var a = 0; a < this.groups[i].pupils.length; a++) {
                    if (pupilID === this.groups[i].pupils[a].id) {
                        this.groups[i].pupils.splice(a, 1);
                    }
                }
            }
        }
    };
    Groups.prototype.update = function (groupId, obj) {
        for (var i = 0; i < this.groups.length; i++) {
            if (groupId === this.groups[i].groupId) {
                this.groups[i].room = obj.room;
            }
        }
    };
    Groups.prototype.read = function (groupId) {
        for (var i = 0; i < this.groups.length; i++) {
            if (groupId === this.groups[i].groupId) {
                return { id: groupId, room: this.groups[i].room };
            }
        }
    };
    Groups.prototype.readAll = function () {
        var groups = [];
        for (var i = 0; i < this.groups.length; i++) {
            groups.push({ id: this.groups[i].groupId, room: this.groups[i].room });
        }
        return groups;
    };
    return Groups;
}());
exports["default"] = Groups;
