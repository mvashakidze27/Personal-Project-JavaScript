import { LMS } from "./LMS.mjs";
import { Teachers } from "./Teachers.mjs";
import { Pupils } from "./Pupils.mjs";

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
const data = {
  name: {
    first: "Annie",
    last: "Smith",
  },
  dateOfBirth: "7, 7, 1970",
  emails: {
    email: "annie@yahoo.com",
    primary: "anniesmith@gmail.com",
  },
  phones: {
    phone: "595343434",
    primary: "555333444",
  },
  sex: "female",
  subjects: {
    subject1: "Linguistics-101",
    subject2: "Linguistics-102",
    subject3: "Linguistics-103",
  },
  description: "the scientific study of language",
};

let teacherId = teachers.add(data);
console.log(teacherID);

let readalready = teachers.read(teacherId);
console.log(readalready);

let teachersId = teachers.update(teachersId, updatedProfile);
console.log(teachersId);

let removedalready = teachers.remove(teacherId);
console.log(removedalready);


