export interface Teachers_Object {
  name: {
    first: string;
    last: string;
  };
  image: string;
  dateOfBirth: string;
  emails: Array<Emails>;
  phones: Array<Phones>;
  sex: string;
  subjects: Array<Subjects>;
  description?: string;
  teacherId?: number;
}

interface Emails {
  email: string;
  primary: boolean;
}

interface Phones {
  phone: string;
  primary: boolean;
}

interface Subjects {
  subject: string;
}

class Teachers {
  teachers: Array<Teachers_Object> = [];

  validation(obj: Teachers_Object) {
    if (obj.dateOfBirth) {
      const date_Regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
      if (!date_Regex.test(obj.dateOfBirth)) {
        throw "The format of the date is not valid";
      }
    }
  }

  add(data: Teachers_Object) {
    this.validation(data);
    data.teacherId = Math.floor((Math.random() + 1) * 100);
    this.teachers.push(data);
    return data.teacherId;
  }

  read(teacherId: number) {
    for (var i = 0; i < this.teachers.length; i++) {
      if (teacherId === this.teachers[i].teacherId) {
        console.log(this.teachers[i]);
      } else {
        throw "The ID of a teacher wasn not found";
      }
    }
  }

  update(teacherId: number, updatedProfile: Teachers_Object) {
    for (var i = 0; i < this.teachers.length; i++) {
      if (teacherId === this.teachers[i].teacherId) {
        updatedProfile.teacherId = this.teachers[i].teacherId;
        this.teachers[i] = { ...this.teachers[i], ...updatedProfile };
        return updatedProfile.teacherId;
      } else {
        throw "The ID of a teacher wasn not found";
      }
    }
  }

  remove(teacherId: number) {
    for (var i = 0; i < this.teachers.length; i++) {
      if (teacherId === this.teachers[i].teacherId) {
        this.teachers.splice(i, 1);
      } else {
        throw "The ID of a teacher wasn not found";
      }
    }
  }
}

export default Teachers;
