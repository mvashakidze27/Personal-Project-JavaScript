export class LMS {
  constructor() {
    this.db = new Map();
    this.counter = 0;
  }
  validate(subject) {
    if (typeof subject.title !== "string") {
      throw new Error("Error: The subject title should be a string");
    }
    if (typeof subject.lessons !== "number") {
      throw new Error("Error: The subject lessons should be a number");
    }
    if (
      typeof subject.description !== "string" &&
      typeof subject.description !== "undefined"
    ) {
      throw new Error("Error: The subject description should be a string");
    }
  }
  add(subject) {
    this.validate(subject);
    let id = this.counter.toString();
    subject.id = id;
    this.db.set(id, subject);
    this.counter++;
    return id;
  }
  remove(subject) {
    this.validate(subject);
    return this.db.delete(subject.id);
  }
  verify(subject) {
    this.validate(subject);
    return this.db.has(subject.id);
  }
  readAll() {
    return Array.from(this.db);
  }
}



