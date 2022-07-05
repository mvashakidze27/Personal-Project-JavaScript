interface Pupils_Object {
  name: {
    first: string;
    last: string;
  };
  image: string;
  dateOfBirth: string;
  phones: Array<Phones>;
  sex: string;
  description?: string;
  id?: number;
}

interface Phones {
  phone: string;
  primary: boolean;
}

class Pupils {
  Pupils: Array<Pupils_Object> = [];

  validation(obj: Pupils_Object) {
    if (obj.dateOfBirth) {
      const date_Regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
      if (!date_Regex.test(obj.dateOfBirth)) {
        throw "The format of the date is not valid";
      }
    }
  }

  add(data: Pupils_Object) {
    this.validation(data);
    data.id = Math.floor((Math.random() + 1) * 100);
    this.Pupils.push(data);
    return data;
  }

  read(pupilId: number) {
    for (var i = 0; i < this.Pupils.length; i++) {
      if (pupilId === this.Pupils[i].id) {
        console.log(this.Pupils[i]);
      } else {
        throw "The ID of a pupil wasn not found";
      }
    }
  }

  update(pupilId: number, updatedProfile: Pupils_Object) {
    for (var i = 0; i < this.Pupils.length; i++) {
      if (pupilId === this.Pupils[i].id) {
        updatedProfile.id = this.Pupils[i].id;
        this.Pupils[i] = { ...this.Pupils[i], ...updatedProfile };
        return updatedProfile.id;
      } else {
        throw "The ID of a pupil wasn not found";
      }
    }
  }

  remove(pupilId: number) {
    for (var i = 0; i < this.Pupils.length; i++) {
      if (pupilId === this.Pupils[i].id) {
        this.Pupils.splice(i, 1);
      } else {
        throw "The ID of a pupil wasn not found";
      }
    }
  }
}

export default Pupils;
