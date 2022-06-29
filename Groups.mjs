export class Groups {
  groups = [];
  add(data) {
    this.studentGroup = {};
    this.groupId = Math.floor((Math.random() + 1) * 100);
    this.studentGroup.room = data;
    this.studentGroup.pupils = [];
    this.studentGroup.groupId = this.groupId;
    this.groups.push(this.studentGroup);
    return this.groupId;
  }

  addPupil(groupId, pupil) {
    for (var i = 0; i < this.groups.length; i++) {
      if (groupId === this.groups[i].groupId) {
        this.groups[i].pupils.push(pupil);
      }
    }
  }

  getGroups() {
    return this.groups;
  }

  removePupil(groupId, pupilId) {
    for (var i = 0; i < this.groups.length; i++) {
      if (groupId === this.groups[i].groupId) {
        for (var a = 0; a < this.groups[i].pupils.length; a++) {
          if (pupilId === this.groups[i].pupils[a].id) {
            this.groups[i].pupils.splice(a, 1);
          }
        }
      }
    }
  }

  update(groupId, obj) {
    for (var i = 0; i < this.groups.length; i++) {
      if (groupId === this.groups[i].groupId) {
        this.groups[i].room = obj.room;
      }
    }
  }

  read(groupId) {
    for (var i = 0; i < this.groups.length; i++) {
      if (groupId === this.groups[i].groupId) {
        return { id: groupId, room: this.groups[i].room };
      }
    }
  }

  readAll() {
    const groups = [];
    for (var i = 0; i < this.groups.length; i++) {
      groups.push({ id: this.groups[i].groupId, room: this.groups[i].room });
    }
    return groups;
  }
}
