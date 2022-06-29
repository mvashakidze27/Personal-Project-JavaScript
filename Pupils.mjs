export class Pupils {
  constructor() {
    this.db = new Map();
    this.counter = 0;
  }
  validate(data) {
    if (typeof data.name.first !== "string") {
      throw new Error("Error: The pupil's first name should be a string");
    }
    if (typeof data.name.last !== "string") {
      throw new Error("Error: The pupil's last name should be a string");
    }
    if (typeof data.dateOfBirth !== "string") {
      throw new Error("Error: The pupil's date of birth should be a string");
    }
    if (data.phones) {
      for (var i = 0; i < data.phones.length; i++) {
        if (typeof data.phones[i].phone !== "string")
          throw new Error("Error: The pupil's phones should be string");
        if (typeof data.phones[i].primary !== "boolean")
          throw new Error(
            "Error: The pupil's primary phone should be a boolean"
          );
      }
    } else {
      throw new Error("Error: Invalid phones input");
    }
    if (typeof data.sex !== "string") {
      throw new Error("Error: The pupil's sex should be a string");
    }
    if (
      typeof data.description !== "string" &&
      typeof data.description !== "undefined"
    ) {
      throw new Error("Error: The pupil's description should be a string");
    }
  }
  add(data) {
    this.validate(data);
    let pupil = data;
    let id = this.counter.toString();
    pupil.id = id;
    this.db.set(id, pupil);
    this.counter++;
    return pupil.id;
  }
  read(pupilid) {
    return this.db.get(pupilid);
  }
  update(pupilid, data) {
    this.validate(data);
    this.db.set(pupilid, data);
  }
  remove(pupilid) {
    return this.db.delete(pupilid);
  }
}
