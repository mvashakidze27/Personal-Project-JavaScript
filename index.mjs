import { LMS } from "./LMS.mjs";
import { Teachers } from "./Teachers.mjs";
import { Pupils } from "./Pupils.mjs";
import { Groups } from "./Groups.mjs";
import { Gradebooks } from "./Gradebooks.mjs";

const lms = new LMS();
const history = {
  title: "History",
  lessons: 24,
  description: "history of mankind",
};

let lmsId = lms.add(history);
console.log(lmsId);

// let alreadyremoved = lms.remove (history);
// console.log(alreadyremoved);

let alreadyverified = lms.verify(history);
console.log(alreadyverified);

let alreadyread = lms.readAll();
console.log(alreadyread);

const teachers = new Teachers();
const teachdata = {
  name: {
    first: "Annie",
    last: "Smith",
  },
  dateOfBirth: "7, 7, 1970",
  emails: [
    {
      email: "annie@yahoo.com",
      primary: false,
    },
    {
      email: "annie@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "595343434",
      primary: true,
    },
    {
      phone: "567895623",
      primary: false,
    },
  ],
  sex: "female",
  subjects: [
    { subject: "Linguistics-101" },
    { subject: "Linguistics-102" },
    { subject: "Linguistics-103" },
  ],
  description: "the scientific study of language",
};

let teacherId = teachers.add(teachdata);
console.log(teacherId);

let readalready = teachers.read(teacherId);
console.log(readalready);

let removedalready = teachers.remove(teacherId);
console.log(removedalready);

const pupils = new Pupils();
const pupildata = {
  name: {
    first: "Daniel",
    last: "Brown",
  },
  dateOfBirth: "5, 5, 2000",
  phones: [
    {
      phone: "533333333",
      primary: false,
    },
    {
      phone: "577777777",
      primary: true,
    },
  ],
  sex: "male",
  description: "motivated student",
};

let pupilid = pupils.add(pupildata);
console.log(pupilid);

let pupreadalready = pupils.read(pupilid);
console.log(pupreadalready);

let pupilsremovedalready = pupils.remove(pupilid);
console.log(pupilsremovedalready);

const room = 236;
const groups = new Groups();

const groupId = groups.add(room);
console.log(groupId);

let groupreadalready = groups.read(groupId);
console.log(groupreadalready);

let groupreadallalready = groups.readAll(groupId);
console.log(groupreadallalready);

const gradebooks = new Gradebooks(groups, teachers, lms);

const gradebookadd = gradebooks.add(groupId);
console.log(gradebookadd);
