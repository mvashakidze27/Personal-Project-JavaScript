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
    if (typeof data.emails.email !== "string") {
      throw new Error("Error: The teacher's emails should be string");
    }
    if (typeof data.emails.primary !== "boolean") {
      throw new Error("Error: The teacher's primary email should be a boolean");
    }
    if (typeof data.phones.phone !== "string") {
      throw new Error("Error: The teacher's phones should be string");
    }
    if (typeof data.phones.primary !== "boolean") {
      throw new Error("Error: The teacher's primary phone should be a boolean");
    }
    if (typeof data.sex !== "string") {
      throw new Error("Error: The teacher's sex should be a string");
    }
    if (typeof data.subjects.subject !== "string") {
      throw new Error("Error: The teacher's subjects should be string");
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
    let id = this.counter.toString();
    teacherId = id;
    this.db.set(id, data);
    this.counter++;
    return id;
  }
  read(teacherId) {
    return { teacherId, ...Array.from(this.db) };
  }
  update(teacherId, data) {
    this.validate(data);
    let updatedProfile = { ...this.db.get(teacherId), ...data };
    this.validate(updatedProfile);
    this.db.set(teacherId, updatedProfile);
  }
  remove(data) {
    this.validate(data);
    return this.db.delete(teacherId);
  }
}
