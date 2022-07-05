"use strict";
exports.__esModule = true;
var LMS_js_1 = require("./LMS.js");
var teachers_js_1 = require("./teachers.js");
var pupils_js_1 = require("./pupils.js");
var groups_js_1 = require("./groups.js");
var gradebooks_js_1 = require("./gradebooks.js");
var lms = new LMS_js_1.LMS();
var history = {
    title: "History",
    lessons: 24,
    description: "history of mankind"
};
var lmsId = lms.add(history);
console.log(lmsId);
// let alreadyremoved = lms.remove (history);
// console.log(alreadyremoved);
var alreadyverified = lms.verify(history);
console.log(alreadyverified);
var alreadyread = lms.readAll();
console.log(alreadyread);
var teachers = new teachers_js_1.Teachers();
var teachdata = {
    name: {
        first: "Annie",
        last: "Smith"
    },
    dateOfBirth: "7, 7, 1970",
    emails: [
        {
            email: "annie@yahoo.com",
            primary: false
        },
        {
            email: "annie@gmail.com",
            primary: true
        },
    ],
    phones: [
        {
            phone: "595343434",
            primary: true
        },
        {
            phone: "567895623",
            primary: false
        },
    ],
    sex: "female",
    subjects: [
        { subject: "Linguistics-101" },
        { subject: "Linguistics-102" },
        { subject: "Linguistics-103" },
    ],
    description: "the scientific study of language"
};
var teacherId = teachers.add(teachdata);
console.log(teacherId);
var readalready = teachers.read(teacherId);
console.log(readalready);
var removedalready = teachers.remove(teacherId);
console.log(removedalready);
var pupils = new pupils_js_1.Pupils();
var pupildata = {
    name: {
        first: "Daniel",
        last: "Brown"
    },
    dateOfBirth: "5, 5, 2000",
    phones: [
        {
            phone: "533333333",
            primary: false
        },
        {
            phone: "577777777",
            primary: true
        },
    ],
    sex: "male",
    description: "motivated student"
};
var pupilid = pupils.add(pupildata);
console.log(pupilid);
var pupreadalready = pupils.read(pupilid);
console.log(pupreadalready);
var pupilsremovedalready = pupils.remove(pupilid);
console.log(pupilsremovedalready);
var room = 236;
var groups = new groups_js_1.Groups();
var groupId = groups.add(room);
console.log(groupId);
var groupreadalready = groups.read(groupId);
console.log(groupreadalready);
var groupreadallalready = groups.readAll(groupId);
console.log(groupreadallalready);
var gradebooks = new gradebooks_js_1.Gradebooks(groups, teachers, lms);
var gradebookadd = gradebooks.add(groupId);
console.log(gradebookadd);
