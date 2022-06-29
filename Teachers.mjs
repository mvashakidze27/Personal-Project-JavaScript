export class Teachers {
  constructor() {
    this.db = new Map();
    this.counter = 0;
  }
  validate(data) {
    if (typeof data.name.first !== "string") {
      throw new Error("Error: The teacher's first name should be a string");
    }
    if (typeof data.name.last !== "string") {
      throw new Error("Error: The teacher's last name should be a string");
    }
    if (typeof data.dateOfBirth !== "string") {
      throw new Error("Error: The teacher's date of birth should be a string");
    }
    if (data.emails) {
      for (var i = 0; i < data.emails.length; i++) {
        if (typeof data.emails[i].email !== "string")
          throw new Error("Error: The teacher's emails should be string");
        if (typeof data.emails[i].primary !== "boolean")
          throw new Error(
            "Error: The teacher's primary email should be a boolean"
          );
      }
    } else {
      throw new Error("Error: Invalid emails input");
    }
    if (data.phones) {
      for (var i = 0; i < data.phones.length; i++) {
        if (typeof data.phones[i].phone !== "string")
          throw new Error("Error: The teacher's phones should be string");
        if (typeof data.phones[i].primary !== "boolean")
          throw new Error(
            "Error: The teacher's primary phone should be a boolean"
          );
      }
    } else {
      throw new Error("Error: Invalid phones input");
    }
    if (typeof data.sex !== "string") {
      throw new Error("Error: The teacher's sex should be a string");
    }
    if (data.subjects) {
      for (var i = 0; i < data.subjects.length; i++) {
        if (typeof data.subjects[i].subject !== "string") {
          throw new Error("Error: The teacher's subjects should be string");
        }
      }
    }
    if (
      typeof data.description !== "string" &&
      typeof data.description !== "undefined"
    ) {
      throw new Error("Error: The teacher's description should be a string");
    }
  }
  add(data) {
    this.validate(data);
    let teacher = data;
    let id = this.counter.toString();
    teacher.id = id;
    this.db.set(id, teacher);
    this.counter++;
    return id;
  }
  read(teacherId) {
    return this.db.get(teacherId);
  }
  update(teacherId, data) {
    this.validate(data);
    this.db.set(teacherId, data);
  }
  remove(teacherId) {
    return this.db.delete(teacherId);
  }
}
