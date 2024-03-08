namespace Subjects {
  export interface Teacher {
    experienceTeachingReact? : number;
  }

  export class React {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(teacher: Teacher): string {
      return teacher.experienceTeachingReact > 0 ? `vailable Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
