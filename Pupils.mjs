// Pupil's Schema
{
    "name": {
      "first": "string",
      "last": "string"
    },
    "dateOfBirth": "string", // format date
    "phones": [
      {
        "phone": "string",
        "primary": "boolean"
      }
    ],
    "sex": "string", // male OR female
    "description": "string"
  }
  // all fields are required, except description
  
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