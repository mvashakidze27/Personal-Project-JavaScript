const pupilId = pupil.id;
const teacherId = teacherId;
const gradebooks = new Gradebooks(groups, teachers, lms);

// Create a new gradebook.
const gradebook = gradebooks.add(group.id);

// Destroy all data inside this gradebook
gradebooks.clear();

// shceme of a record. all fields are required.
const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

gradebooks.addRecord(gradebookId, record);

// Read information about oliver results
const oliver = gradebooks.read(gradebookId, pupilId);
{
  name: 'Oliver Black',
  records: [
    {
      teacher: 'Elizabeth Holms',
      subject: 'History',
      lesson: 1,
      mark: 9
    }
  ]
}

// Read information about all students in this gradebook
const students = gradebooks.readAll(gradebookId); // It will return the array of objects