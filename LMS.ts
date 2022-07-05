interface LMS_Object {
  title: string;
  lessons: number;
  description?: string;
}

class Subject {
  title: string;
  lessons: number;
  description?: string;
  subjectId: number;

  constructor(obj: LMS_Object) {
    this.title = obj.title;

    this.lessons = obj.lessons;

    this.description = obj.description;

    this.subjectId = Math.floor((Math.random() + 1) * 100);
  }
  id() {
    return this.subjectId;
  }
}

class LMS {
  subjects: LMS_Object[] = [];

  add(subject: LMS_Object) {
    if (this.subjects.length !== 0) {
      for (var i = 0; i < this.subjects.length; i++) {
        if (this.subjects[i].title === subject.title) {
          throw "The subject that you have just added already exists";
        }
      }
      this.subjects.push(subject);
    } else {
      this.subjects.push(subject);
    }
  }

  remove(subject: LMS_Object) {
    if (this.subjects.length !== 0) {
      for (var i = 0; i < this.subjects.length; i++) {
        if (this.subjects[i].title === subject.title) {
          this.subjects.splice(i, 1);
        }
      }
    } else {
      throw "The list of subjects is empty, so removing something is impossible";
    }
  }

  verify(subject: LMS_Object) {
    if (this.subjects.length !== 0) {
      for (var i = 0; i < this.subjects.length; i++) {
        if (this.subjects[i].title === subject.title) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  readAll() {
    const subjectsList = [];
    if (this.subjects.length !== 0) {
      for (var i = 0; i < this.subjects.length; i++) {
        subjectsList.push(this.subjects[i].title);
      }
      return subjectsList;
    } else {
      throw "The list of subjects is empty";
    }
  }
}
export { Subject, LMS };
