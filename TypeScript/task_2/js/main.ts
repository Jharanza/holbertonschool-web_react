interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  else return new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher ) {
  if (isDirector(employee)) {
    const director = new Director();
    const taskDirector = director.workDirectorTasks();

    console.log(taskDirector);
  } else {
    const teacher = new Teacher();
    const taskTeacher = teacher.workTeacherTasks();

    console.log(taskTeacher)
  }
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects) => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
