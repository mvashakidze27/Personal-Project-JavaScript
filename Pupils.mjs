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
    if (typeof data.phones.phone !== "string") {
      throw new Error("Error: The pupil's phones should be string");
    }
    if (typeof data.phones.primary !== "boolean") {
      throw new Error("Error: The pupil's primary phone should be a boolean");
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
  
  // Create new Pupil from Pupil's data
  const pupils = new Pupils();
  
  // Create a new pupil
  const pupil = pupils.add(data);
  
  pupil.id // should return pupil ID
  
  // will return Pupils data including pupil's id
  pupils.read(pupil.id)
  
  // will update Pupil. This method should use the same validation as a add method
  pupils.update(pupil.id, updatedProfile)
  
  // will remove pupil
  pupils.remove(pupil.id)