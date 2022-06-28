import { LMS } from "./LMS.mjs";

const lms = new LMS();
const history = {
  title: "History",
  lessons: 24,
  description: "history of mankind",
};

let id = lms.add (history);
console.log(id);

// let alreadyremoved = lms.remove (history);
// console.log(alreadyremoved);

let alreadyverified = lms.verify (history);
console.log(alreadyverified);

let alreadyread = lms.readAll ();
console.log(alreadyread);