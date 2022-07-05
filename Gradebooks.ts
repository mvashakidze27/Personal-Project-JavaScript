import {CurrentGroup1} from "./groups"
import {Teachers_Object} from "./teachers"

interface Gradebooks_Object {
    gradebookId:number;
    level: number;
    groupID: number;
    record?: Records;
}

interface Records {
    pupilId: number;
    teacherId: number;
    subjectId: number;
    lesson: number;
    mark: number;
}

interface Subjects {
    subject: string;
}

class Gradebooks {
    gradebooks:Gradebooks_Object[] = [];
    groups: CurrentGroup1;
    teachers: Teachers_Object[] = [];
    lms: object;

    constructor(groups:CurrentGroup1, teachers: Teachers_Object[], lms: object) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(level:number, groupID:number) {
       const gradebookId = Math.floor((Math.random() + 1) * 100);
       this.gradebooks.push({gradebookId, level, groupID});
       return gradebookId;
    }

    clear() {
        this.gradebooks = [];
    }

    addRecord(gradebookId: number, record:Records) {
        for(var i = 0; i < this.gradebooks.length; i++) {
            if(gradebookId === this.gradebooks[i].gradebookId) {
                this.gradebooks[i].record = record;
            }
        }
    }

    read(gradebookId: number, pupilId: number) {
        let pupilName:{
            first: string;
            last: string;
        } = {
            first: "",
            last: ""
        };
        let teacherName: {
            first: string;
            last: string;
        } = {
            first: "",
            last: ""
        };
        let teacherSubject: {
            subject: Array<Subjects>;
        } = {
            subject: []
        };
        var lesson:number | undefined;
        var mark: number | undefined;

        for(var i = 0; i < this.groups.getGroups().length; i++) {
                for(var a = 0; a < this.groups.getGroups()[i].pupils.length; a++) {
                    if(pupilId === this.groups.getGroups()[i].pupils[a].id) {
                        pupilName.first = this.groups.getGroups()[i].pupils[a].name.first;
                        pupilName.last = this.groups.getGroups()[i].pupils[a].name.last;
                    }
                }
        } 

        for(var i = 0; i <this.gradebooks.length; i++) {
            if(gradebookId === this.gradebooks[i].gradebookId) {
                lesson = this.gradebooks[i]?.record?.lesson;
                mark = this.gradebooks[i]?.record?.mark;
                for(var a = 0; a <this.teachers.length; a++) {
                    if(this.gradebooks[i]?.record?.teacherId === this.teachers[a].teacherId) {
                        teacherName.first = this.teachers[a].name.first;
                        teacherName.last = this.teachers[a].name.last;
                        teacherSubject.subject = this.teachers[a].subjects;
                    }
                }
            }
        }

        return {
            name: pupilName.first, pupilName.last,
            records: [
                {teacher: {teacherName.first} {teacherName.last},
                subject: teacherSubject.subject[0].subject,
                 lesson: lesson,
                 mark: mark,
                 } 
            ]
        }
    }
}

export default Gradebooks;