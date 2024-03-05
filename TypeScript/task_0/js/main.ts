interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jhony',
  lastName: 'Arana',
  age: 44,
  location: 'Lima'
}

const student2: Student = {
  firstName: 'Maria',
  lastName: 'Sharapova',
  age: 34,
  location: 'Moscu'
}

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerText = student.firstName;
  cell2.innerText = student.location;
})

document.body.appendChild(table);
