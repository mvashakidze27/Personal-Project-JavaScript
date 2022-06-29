export class Gradebooks {
  gradebooks = [];
  constructor(groups, teachers, lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }
  add(groupId) {
    const gradebookId = Math.floor((Math.random() + 1) * 100);
    this.gradebooks.push({ gradebookId, groupId });
    return gradebookId;
  }
  clear() {
    this.gradebooks = [];
  }
  addRecord(gradebookId, record) {
    for (var i = 0; i < this.gradebooks.length; i++) {
      if (gradebookId === this.gradebooks[i].gradebookId) {
        this.gradebooks[i].record = record;
      }
    }
  }
  read(gradebookId, pupilId) {
    const pupilName = {};
    const teacherName = {};
    const teacherSubject = {};
    var lesson;
    var mark;
    for (var i = 0; i < this.groups.getGroups().length; i++) {
      for (var a = 0; a < this.groups.getGroups()[i].pupils.length; a++) {
        if (pupilId === this.groups.getGroups()[i].pupils[a].id) {
          pupilName.first = this.groups.getGroups()[i].pupils[a].name.first;
          pupilName.last = this.groups.getGroups()[i].pupils[a].name.last;
        }
      }
    }
    for (var i = 0; i < this.gradebooks.length; i++) {
      if (gradebookId === this.gradebooks[i].gradebookId) {
        lesson = this.gradebooks[i].record.lesson;
        mark = this.gradebooks[i].record.mark;
        for (var a = 0; a < this.teachers.teachers.length; a++) {
          if (
            this.gradebooks[i].record.teacherId ===
            this.teachers.teachers[a].teacherId
          ) {
            teacherName.first = this.teachers.teachers[a].name.first;
            teacherName.last = this.teachers.teachers[a].name.last;

            teacherSubject.subject = this.teachers.teachers[a].subjects;
          }
        }
      }
    }
    return {
      name: `${pupilName.first} ${pupilName.last}`,
      records: [
        {
          teacher: `${teacherName.first} ${teacherName.last}`,
          subject: teacherSubject.subject[0].subject,
          lesson: lesson,
          mark: mark,
        },
      ],
    };
  }
  readAll(gradebookId) {
    for (let i = 0; i < this.gradebooks.length; i++) {
      if (gradebookId === this.gradebooks[i].gradebookId) {
        return [this.gradebooks[i].record];
      }
    }
  }
}
