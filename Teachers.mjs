const teachers = {
    name: {
        first: "Annie",
        last: "Smith",
    },
    dateOfBirth: new Date (),
    emails: {
        email: "annie@yahoo.com",
        primary: "anniesmith@gmail.com"
    },
    phones: {
        phone: "595343434",
        primary: "555333444"
    }, 
    sex: "female",
    subjects: {
        subject1: "Linguistics-101",
        subject2: "Linguistics-102",
        subject3: "Linguistics-103",
    },
    description: "the scientific study of language",

    if (typeof name !== "string") {
        throw new Error("Error: The subject title should be a string");
    }
};


// Teacher's schema
{    "name": {
      "first": "string",
      "last": "string"
    },
    "dateOfBirth": "string", // format date
    "emails": [
      {
        "email": "string",
        "primary": "boolean"
      }
    ],
    "phones": [
      {
        "phone": "string",
        "primary": "boolean"
      }
    ],
    "sex": "string", // male or female
    "subjects": [
      {
        "subject": "string" // just name property of subject.
      }
    ],
    "description": "string",
  }
  // all fields are required, except description
  
  // Create new Teachers class.
  const teachers = new Teachers();
  
  // Create a new teacher
  const teacherId = teachers.add(data);
  
  // will return Teachers data including teacher's id
  teachers.read(teacherId)
  
  // will update Teacher. This method should use the same validation as a add method
  const teacherId = teachers.update(teacherId, updatedProfile)
  
  // will remove teacher
  teachers.remove(teacherId)