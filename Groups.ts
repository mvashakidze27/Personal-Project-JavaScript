interface Pupils_Object {
    pupils: any;
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

export interface CurrentGroup1 {
    room: number;
    pupils: Array<Pupils_Object>;
    groupId: number;
    getGroups(): Array<CurrentGroup1>;
}

class Groups {
    groups: Array<CurrentGroup1> = [];
    groupId: number;
    currentGroup: CurrentGroup1;

    add(data: number) {
        // this.currentGroup = {};
        this.groupId = Math.floor((Math.random() + 1) * 100);
        this.currentGroup.room = data;
        this.currentGroup.pupils = [];
        this.currentGroup.groupId = this.groupId;
        this.groups.push(this.currentGroup);
        return this.groupId;
    }

    addPupil(groupId: number, pupil:Pupils_Object) {
        for(var i = 0; i < this.groups.length; i++) {
            if(groupId === this.groups[i].groupId) {
                this.groups[i].pupils.push(pupil);
            }
        }
    }

    getGroups() {
        return this.groups;
    }

    removePupil(groupId: number, pupilID: number) {
        for(var i = 0; i < this.groups.length; i++) {
            if(groupId === this.groups[i].groupId) {
                for(var a = 0; a < this.groups[i].pupils.length; a++) {
                    if(pupilID === this.groups[i].pupils[a].id) {
                        this.groups[i].pupils.splice(a,1);
                    }
                }
            }
        }
    }

    update(groupId: number, obj: CurrentGroup1) {
        for(var i = 0; i < this.groups.length; i++) {
            if(groupId === this.groups[i].groupId) {
                this.groups[i].room = obj.room;
            }
        }
    }

    read(groupId: number) {
        for(var i = 0; i < this.groups.length; i++) {
            if(groupId === this.groups[i].groupId) {
                return {id: groupId, room: this.groups[i].room}
            }
        }
    }

    readAll() {
        const groups = [];
        for(var i = 0; i < this.groups.length; i++) {
            groups.push({id: this.groups[i].groupId, room: this.groups[i].room})
        }
        return groups;
    }
}

export default Groups;